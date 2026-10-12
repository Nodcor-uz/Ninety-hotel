import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { Maquette } from "@/components/hotel/maquette";
import {
  EMAIL,
  GALLERY,
  MAPS,
  OSM,
  PHONE,
  PHONE_PRETTY,
  copy,
  money,
  nightCount,
  type Lang,
} from "@/lib/hotel/copy";
import { play, setAmbient, setSoundEnabled } from "@/lib/hotel/sound";

type Intent = "stay" | "question";
type RoomId = "room" | "deluxe" | "suite";

const LANGS: Lang[] = ["uz", "ru", "en"];

function isoDate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function Site() {
  const [lang, setLangState] = useState<Lang>("ru");
  const [sound, setSound] = useState(false);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState<"all" | "house" | "rooms" | "table">("all");
  const [frame, setFrame] = useState<number | null>(null);
  const [intent, setIntent] = useState<Intent>("stay");
  const [roomId, setRoomId] = useState<RoomId>("room");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [today, setToday] = useState("");

  const t = copy[lang];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) document.documentElement.dataset.animate = "1";
    const stored = localStorage.getItem("ninety-lang");
    if (stored === "ru" || stored === "uz" || stored === "en") setLangState(stored);
    const start = new Date();
    start.setDate(start.getDate() + 3);
    const end = new Date();
    end.setDate(end.getDate() + 4);
    setToday(isoDate(new Date()));
    setCheckIn(isoDate(start));
    setCheckOut(isoDate(end));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "uz" ? "uz" : lang;
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = menu || frame !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, frame]);

  useEffect(() => {
    if (frame === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFrame(null);
      if (event.key === "ArrowRight") setFrame((i) => (i === null ? i : (i + 1) % shots.length));
      if (event.key === "ArrowLeft")
        setFrame((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [frame]);

  const shots = useMemo(() => {
    const list = filter === "all" ? GALLERY : GALLERY.filter((shot) => shot.cat === filter);
    return list.map((shot) => ({
      ...shot,
      caption: t.shots.find((item) => item.key === shot.key)?.caption ?? shot.key,
    }));
  }, [filter, t.shots]);

  const room = t.rooms.find((item) => item.id === roomId) ?? t.rooms[0];
  const nights = nightCount(checkIn, checkOut);
  const estimate = intent === "stay" && room && nights ? room.price * nights : 0;

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem("ninety-lang", next);
    if (sound) play("lang");
  }

  function toggleSound() {
    const next = !sound;
    setSound(next);
    setSoundEnabled(next);
    if (next) {
      play("ok");
      setAmbient(true);
    }
  }

  function go(id: string) {
    setMenu(false);
    if (sound) play("tap");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function chooseRoom(id: RoomId) {
    setRoomId(id);
    setIntent("stay");
    if (sound) play("tap");
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = t.errName;
    if (phone.replace(/\D/g, "").length < 7) next.phone = t.errPhone;
    if (intent === "stay") {
      if (!roomId) next.room = t.errRoom;
      if (nightCount(checkIn, checkOut) < 1) next.dates = t.errDates;
    }
    setErrors(next);
    if (Object.keys(next).length) return;

    const lines = [
      "NINETY boutique hotel",
      `${t.name}: ${name.trim()}`,
      `${t.phone}: ${phone.trim()}`,
      email.trim() ? `${t.email}: ${email.trim()}` : "",
      intent === "stay" ? `${t.checkIn}: ${checkIn}` : t.question,
      intent === "stay" ? `${t.checkOut}: ${checkOut} (${nights} ${t.nights})` : "",
      intent === "stay" ? `${t.guests}: ${guests}` : "",
      intent === "stay" && room ? `${t.room}: ${room.name}` : "",
      estimate ? `${t.estimate}: ${money(estimate, lang)}` : "",
      note.trim() ? `${t.note}: ${note.trim()}` : "",
    ].filter(Boolean);
    const message = lines.join("\n");
    const payload = { at: new Date().toISOString(), message };
    const prev = localStorage.getItem("ninety-requests");
    let list: unknown[] = [];
    try {
      list = prev ? (JSON.parse(prev) as unknown[]) : [];
      if (!Array.isArray(list)) list = [];
    } catch {
      list = [];
    }
    list.unshift(payload);
    localStorage.setItem("ninety-requests", JSON.stringify(list.slice(0, 8)));
    setDone(message);
    if (sound) play("ok");
  }

  async function share() {
    const data = { title: "NINETY boutique hotel", text: t.title, url: window.location.href };
    if (sound) play("soft");
    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        /* dismissed */
      }
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  const wa = done ? `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(done)}` : "";
  const mail = done
    ? `mailto:${EMAIL}?subject=${encodeURIComponent("NINETY")}&body=${encodeURIComponent(done)}`
    : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "NINETY boutique hotel",
    telephone: PHONE,
    email: EMAIL,
    url: "https://maps.google.com/?q=41.29704,69.26071",
    address: {
      "@type": "PostalAddress",
      streetAddress: "23A Zanjirbog passage",
      addressLocality: "Tashkent",
      addressRegion: "Yakkasaray",
      postalCode: "100032",
      addressCountry: "UZ",
    },
    geo: { "@type": "GeoCoordinates", latitude: 41.29704, longitude: 69.26071 },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "17" },
    checkinTime: "14:00",
    checkoutTime: "12:00",
    numberOfRooms: 16,
  };

  return (
    <div className="bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3">
          <a href="#top" className="font-serif text-2xl leading-none tracking-tight" onClick={() => sound && play("tap")}>
            NINETY
          </a>
          <nav className="ml-6 hidden items-center gap-5 text-sm md:flex">
            {(
              [
                ["stay", "stay"],
                ["rooms", "rooms"],
                ["gallery", "gallery"],
                ["reviews", "reviews"],
                ["place", "place"],
              ] as const
            ).map(([id, key]) => (
              <button key={id} type="button" className="press text-stone hover:text-ink" onClick={() => go(id)}>
                {t.nav[key]}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-1 text-xs tracking-widest uppercase">
              {LANGS.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`press min-h-11 min-w-9 px-1 ${lang === code ? "text-ink" : "text-stone"}`}
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                >
                  {code}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="press grid size-11 place-items-center border border-line"
              onClick={toggleSound}
              aria-pressed={sound}
              aria-label={sound ? t.soundOn : t.soundOff}
            >
              {sound ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
            </button>
            <a
              href={`tel:${PHONE}`}
              className="press hidden h-11 items-center gap-2 border border-ink px-3 text-sm sm:inline-flex"
              onClick={() => sound && play("tap")}
            >
              <Phone className="size-4" />
              {PHONE_PRETTY}
            </a>
            <button type="button" className="press grid size-11 place-items-center border border-ink md:hidden" onClick={() => setMenu(true)} aria-label={t.menu}>
              <Menu className="size-4" />
            </button>
          </div>
        </div>
      </header>

      {menu ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper px-6 py-5 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl">NINETY</span>
            <button type="button" className="press grid size-11 place-items-center border border-line" onClick={() => setMenu(false)} aria-label={t.close}>
              <X className="size-4" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-2">
            {(
              [
                ["stay", t.nav.stay],
                ["rooms", t.nav.rooms],
                ["gallery", t.nav.gallery],
                ["reviews", t.nav.reviews],
                ["place", t.nav.place],
                ["book", t.nav.book],
              ] as const
            ).map(([id, label]) => (
              <button key={id} type="button" className="press py-3 text-left font-serif text-4xl" onClick={() => go(id)}>
                {label}
              </button>
            ))}
          </nav>
          <a href={`tel:${PHONE}`} className="mt-auto inline-flex min-h-12 items-center gap-2 text-lg">
            <Phone className="size-4" />
            {PHONE_PRETTY}
          </a>
        </div>
      ) : null}

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-8 lg:grid-cols-12 lg:py-14">
          <div className="lg:col-span-5">
            <p className="rise text-xs tracking-widest text-stone uppercase">{t.kicker}</p>
            <h1 className="hero-title rise d1 mt-4">{t.title}</h1>
            <p className="rise d2 mt-6 max-w-md text-lg text-stone">{t.lead}</p>
            <div className="rise d3 mt-8 flex flex-wrap gap-3">
              <button type="button" className="press inline-flex min-h-12 items-center bg-clay px-5 text-paper" onClick={() => go("book")}>
                {t.book}
              </button>
              <a href={`tel:${PHONE}`} className="press inline-flex min-h-12 items-center border border-ink px-5">
                {t.call}
              </a>
            </div>
            <p className="rise d4 mt-6 flex items-center gap-2 text-sm">
              <Star className="size-4 fill-clay text-clay" />
              {t.rating}
            </p>
          </div>
          <div className="relative lg:col-span-7">
            <p className="side-rail absolute top-4 -left-2 hidden text-xs text-stone xl:block">NINETY · TASHKENT</p>
            <div className="overflow-hidden bg-ink">
              <video
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/media/dusk.jpg"
                preload="metadata"
              >
                <source src="/media/arrive.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mt-3 text-sm text-stone">
              {t.from} {money(650000, lang)} {t.perNight}
            </p>
          </div>
        </section>

        <section className="border-y border-line">
          <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-5">
            {t.facts.map((fact) => (
              <div key={fact.k} className="border-line px-5 py-5 sm:border-r sm:last:border-r-0">
                <p className="text-xs tracking-widest text-stone uppercase">{fact.k}</p>
                <p className="mt-2 font-serif text-3xl">{fact.v}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="overflow-hidden border-b border-line py-4">
          <div className="marquee-track text-sm tracking-widest uppercase">
            {[...t.ribbon, ...t.ribbon].map((word, index) => (
              <span key={`${word}-${index}`} className="text-stone">
                {word}
                <span className="mx-6 text-clay">/</span>
              </span>
            ))}
          </div>
        </div>

        <section id="stay" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <p className="text-xs tracking-widest text-stone uppercase">{t.storyEyebrow}</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="section-title">{t.storyTitle}</h2>
            <div className="mt-8 grid gap-5 text-lg md:grid-cols-3">
              {t.storyBody.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-stone">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sand">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2 lg:py-20">
            <div className="h-80 bg-paper lg:h-[28rem]">
              <Maquette />
            </div>
            <div>
              <p className="text-xs tracking-widest text-stone uppercase">{t.modelEyebrow}</p>
              <h2 className="section-title mt-3">{t.modelTitle}</h2>
              <p className="mt-5 max-w-md text-lg text-stone">{t.modelBody}</p>
              <p className="mt-6 text-xs tracking-widest text-clay uppercase">{t.modelHint}</p>
            </div>
          </div>
        </section>

        <section id="rooms" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="text-xs tracking-widest text-stone uppercase">{t.roomsEyebrow}</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title max-w-xl">{t.roomsTitle}</h2>
            <p className="max-w-sm text-sm text-stone">{t.roomsNote}</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.rooms.map((item, index) => {
              const active = item.id === roomId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => chooseRoom(item.id)}
                  className={`press flex min-h-64 flex-col border p-5 text-left ${active ? "border-clay bg-sand" : "border-line bg-paper"}`}
                >
                  <span className="text-xs tracking-widest text-stone uppercase">0{index + 1}</span>
                  <span className="mt-6 font-serif text-4xl">{item.name}</span>
                  <span className="mt-3 flex-1 text-stone">{item.blurb}</span>
                  <span className="mt-6 text-sm">
                    {t.from} {money(item.price, lang)} · {item.sleeps} {t.guestsWord}
                  </span>
                  <span className="mt-4 text-xs tracking-widest text-clay uppercase">{t.choose}</span>
                </button>
              );
            })}
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-stone">
            {t.amenity.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="gallery" className="bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <p className="text-xs tracking-widest text-sand uppercase">{t.galleryEyebrow}</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
              <h2 className="section-title max-w-xl">{t.galleryTitle}</h2>
              <div className="flex flex-wrap gap-2">
                {t.filters.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`press min-h-11 border px-3 text-sm ${filter === item.id ? "border-clay bg-clay text-paper" : "border-sand/40 text-sand"}`}
                    onClick={() => {
                      setFilter(item.id);
                      if (sound) play("soft");
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm text-sand">{t.galleryNote}</p>
            <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {shots.map((shot, index) => (
                <button
                  key={shot.key}
                  type="button"
                  className="press mb-4 block w-full break-inside-avoid text-left"
                  onClick={() => {
                    setFrame(index);
                    if (sound) play("open");
                  }}
                >
                  <img src={shot.src} alt={shot.caption} loading="lazy" className="w-full" />
                  <span className="mt-2 block text-sm text-sand">{shot.caption}</span>
                </button>
              ))}
            </div>
            <a href={MAPS} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-sand" target="_blank" rel="noreferrer">
              {t.seeGoogle}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="text-xs tracking-widest text-stone uppercase">{t.reviewsEyebrow}</p>
          <h2 className="section-title mt-3 max-w-3xl">{t.reviewsTitle}</h2>
          <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
            {t.reviews.map((review) => (
              <article key={review.name} className="w-80 shrink-0 snap-start border border-line p-5">
                <div className="flex gap-1 text-clay">
                  {Array.from({ length: review.stars }).map((_, index) => (
                    <Star key={index} className="size-3.5 fill-clay" />
                  ))}
                </div>
                <p className="mt-4 text-lg">{review.text}</p>
                <p className="mt-6 font-serif text-xl">{review.name}</p>
                <p className="text-sm text-stone">{review.meta}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="place" className="bg-sand">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="text-xs tracking-widest text-stone uppercase">{t.placeEyebrow}</p>
              <h2 className="section-title mt-3">{t.placeTitle}</h2>
              <p className="mt-5 max-w-md text-lg text-stone">{t.placeBody}</p>
              <div className="mt-8 space-y-2">
                <p className="text-xs tracking-widest text-stone uppercase">{t.addressLabel}</p>
                <p className="text-lg">{t.address}</p>
                <p className="text-stone">{t.hours}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={MAPS} target="_blank" rel="noreferrer" className="press inline-flex min-h-12 items-center gap-2 bg-ink px-4 text-paper">
                  <MapPin className="size-4" />
                  {t.map}
                </a>
                <a href={`mailto:${EMAIL}`} className="press inline-flex min-h-12 items-center gap-2 border border-ink px-4">
                  <Mail className="size-4" />
                  {EMAIL}
                </a>
              </div>
              <h3 className="mt-10 font-serif text-2xl">{t.nearTitle}</h3>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {t.near.map((item) => (
                  <li key={item.name} className="flex items-center justify-between py-3">
                    <span>{item.name}</span>
                    <span className="text-sm text-stone tabular-nums">{item.dist}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-serif text-2xl">{t.payTitle}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.pay.map((item) => (
                  <li key={item} className="border border-line bg-paper px-3 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-h-80 overflow-hidden border border-line bg-paper">
              <iframe title="NINETY map" src={OSM} className="h-full min-h-80 w-full border-0" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
          <p className="text-xs tracking-widest text-stone uppercase">{t.faqEyebrow}</p>
          <h2 className="section-title mt-3 max-w-xl">{t.faqTitle}</h2>
          <div className="mt-8 border-t border-line">
            {t.faq.map((item) => (
              <details key={item.q} className="border-b border-line">
                <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-4 text-lg">
                  {item.q}
                  <span className="text-clay" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-5 text-stone">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="book" className="border-t border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-widest text-stone uppercase">{t.formEyebrow}</p>
              <h2 className="section-title mt-3">{t.formTitle}</h2>
              <p className="mt-5 text-lg text-stone">{t.formLead}</p>
              <p className="mt-6 max-w-sm text-sm text-stone">{t.direct}</p>
              <img src="/media/lobby.jpg" alt="" loading="lazy" className="mt-8 hidden w-full lg:block" />
            </div>
            <div className="lg:col-span-7">
              {done ? (
                <div className="border border-clay bg-sand p-6">
                  <h3 className="font-serif text-4xl">{t.doneTitle}</h3>
                  <p className="mt-3 text-stone">{t.doneBody}</p>
                  <pre className="mt-6 overflow-x-auto text-sm whitespace-pre-wrap">{done}</pre>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={wa} target="_blank" rel="noreferrer" className="press inline-flex min-h-12 items-center bg-clay px-5 text-paper" onClick={() => sound && play("open")}>
                      {t.whatsapp}
                    </a>
                    <a href={mail} className="press inline-flex min-h-12 items-center border border-ink px-5">
                      {t.emailBtn}
                    </a>
                    <a href={`tel:${PHONE}`} className="press inline-flex min-h-12 items-center border border-ink px-5">
                      {t.call}
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-stone">{t.saved}</p>
                  <button
                    type="button"
                    className="press mt-4 text-sm underline"
                    onClick={() => {
                      setDone(null);
                      if (sound) play("soft");
                    }}
                  >
                    {t.again}
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="grid gap-4" noValidate>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className={`press min-h-12 border ${intent === "stay" ? "border-clay bg-clay text-paper" : "border-line"}`}
                      onClick={() => {
                        setIntent("stay");
                        if (sound) play("soft");
                      }}
                    >
                      {t.stay}
                    </button>
                    <button
                      type="button"
                      className={`press min-h-12 border ${intent === "question" ? "border-clay bg-clay text-paper" : "border-line"}`}
                      onClick={() => {
                        setIntent("question");
                        if (sound) play("soft");
                      }}
                    >
                      {t.question}
                    </button>
                  </div>
                  <label className="grid gap-1 text-sm">
                    {t.name}
                    <input className="field" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
                    {errors.name ? <span className="text-clay">{errors.name}</span> : null}
                  </label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-1 text-sm">
                      {t.phone}
                      <input className="field" value={phone} onChange={(event) => setPhone(event.target.value)} autoComplete="tel" inputMode="tel" />
                      {errors.phone ? <span className="text-clay">{errors.phone}</span> : null}
                    </label>
                    <label className="grid gap-1 text-sm">
                      {t.email}
                      <input className="field" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" inputMode="email" />
                    </label>
                  </div>
                  {intent === "stay" ? (
                    <>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <label className="grid gap-1 text-sm">
                          {t.checkIn}
                          <input className="field" type="date" min={today || undefined} value={checkIn} onChange={(event) => setCheckIn(event.target.value)} />
                        </label>
                        <label className="grid gap-1 text-sm">
                          {t.checkOut}
                          <input className="field" type="date" min={checkIn || today || undefined} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} />
                        </label>
                        <label className="grid gap-1 text-sm">
                          {t.guests}
                          <select className="field" value={guests} onChange={(event) => setGuests(Number(event.target.value))}>
                            {[1, 2, 3, 4].map((count) => (
                              <option key={count} value={count}>
                                {count}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>
                      {errors.dates ? <p className="text-sm text-clay">{errors.dates}</p> : null}
                      <fieldset className="grid gap-2">
                        <legend className="text-sm">{t.room}</legend>
                        <div className="grid gap-2 sm:grid-cols-3">
                          {t.rooms.map((item) => (
                            <label key={item.id} className={`press flex min-h-16 cursor-pointer items-center border px-3 ${roomId === item.id ? "border-clay bg-sand" : "border-line"}`}>
                              <input
                                type="radio"
                                name="room"
                                className="sr-only"
                                checked={roomId === item.id}
                                onChange={() => chooseRoom(item.id)}
                              />
                              <span>
                                <span className="block">{item.name}</span>
                                <span className="text-sm text-stone tabular-nums">{money(item.price, lang)}</span>
                              </span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                      <div className="border border-line p-4">
                        <p className="text-xs tracking-widest text-stone uppercase">{t.estimate}</p>
                        <p className="display-num mt-2 font-serif text-4xl tabular-nums">{estimate ? money(estimate, lang) : "—"}</p>
                        <p className="mt-2 text-sm text-stone">
                          {nights || 0} {t.nights} · {t.confirm}
                        </p>
                        {room && guests > room.sleeps ? <p className="mt-2 text-sm text-clay">{t.crowd}</p> : null}
                      </div>
                    </>
                  ) : null}
                  <label className="grid gap-1 text-sm">
                    {t.note}
                    <textarea className="field min-h-28" value={note} onChange={(event) => setNote(event.target.value)} placeholder={t.notePh} />
                  </label>
                  <button type="submit" className="press min-h-12 bg-ink px-5 text-paper">
                    {t.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-5 py-10 pb-28 text-paper md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-5xl">NINETY</p>
            <p className="mt-3 max-w-sm text-sand">{t.footerNote}</p>
            <p className="mt-2 text-sand">{t.address}</p>
          </div>
          <div className="flex flex-col items-start gap-3 text-sm">
            <a href={`tel:${PHONE}`} className="min-h-11">
              {PHONE_PRETTY}
            </a>
            <a href={`mailto:${EMAIL}`} className="min-h-11">
              {EMAIL}
            </a>
            <button type="button" className="press min-h-11 text-sand" onClick={() => void share()}>
              {copied ? t.copied : t.share}
            </button>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-line bg-ink px-4 py-3 text-paper md:hidden">
        <div>
          <p className="text-xs tracking-widest text-sand uppercase">{t.from}</p>
          <p className="tabular-nums">{money(650000, lang)}</p>
        </div>
        <button type="button" className="press min-h-12 bg-clay px-4 text-paper" onClick={() => go("book")}>
          {t.book}
        </button>
      </div>

      {frame !== null && shots[frame] ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={shots[frame].caption}
          onClick={() => setFrame(null)}
        >
          <button type="button" className="press absolute top-4 right-4 grid size-11 place-items-center border border-sand text-paper" aria-label={t.close} onClick={() => setFrame(null)}>
            <X className="size-4" />
          </button>
          <button
            type="button"
            className="press absolute top-1/2 left-3 hidden size-11 -translate-y-1/2 place-items-center border border-sand text-paper sm:grid"
            onClick={(event) => {
              event.stopPropagation();
              setFrame((index) => (index === null ? index : (index - 1 + shots.length) % shots.length));
              if (sound) play("soft");
            }}
            aria-label="prev"
          >
            ‹
          </button>
          <figure onClick={(event) => event.stopPropagation()} className="max-w-5xl">
            <img src={shots[frame].src} alt={shots[frame].caption} className="max-h-[78vh] w-full object-contain" />
            <figcaption className="mt-3 text-center text-sand">{shots[frame].caption}</figcaption>
          </figure>
          <button
            type="button"
            className="press absolute top-1/2 right-3 hidden size-11 -translate-y-1/2 place-items-center border border-sand text-paper sm:grid"
            onClick={(event) => {
              event.stopPropagation();
              setFrame((index) => (index === null ? index : (index + 1) % shots.length));
              if (sound) play("soft");
            }}
            aria-label="next"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
