export type Lang = "ru" | "uz" | "en";

export type Review = {
  name: string;
  meta: string;
  stars: number;
  text: string;
};

export type Copy = {
  nav: { stay: string; rooms: string; gallery: string; reviews: string; place: string; book: string };
  soundOn: string;
  soundOff: string;
  menu: string;
  close: string;
  kicker: string;
  title: string;
  lead: string;
  book: string;
  call: string;
  from: string;
  perNight: string;
  rating: string;
  facts: { k: string; v: string }[];
  ribbon: string[];
  storyEyebrow: string;
  storyTitle: string;
  storyBody: string[];
  modelEyebrow: string;
  modelTitle: string;
  modelBody: string;
  modelHint: string;
  roomsEyebrow: string;
  roomsTitle: string;
  roomsNote: string;
  guestsWord: string;
  choose: string;
  amenity: string[];
  rooms: { id: "room" | "deluxe" | "suite"; name: string; blurb: string; price: number; sleeps: number }[];
  galleryEyebrow: string;
  galleryTitle: string;
  galleryNote: string;
  filters: { id: "all" | "house" | "rooms" | "table"; label: string }[];
  shots: { key: string; caption: string }[];
  seeGoogle: string;
  reviewsEyebrow: string;
  reviewsTitle: string;
  reviews: Review[];
  placeEyebrow: string;
  placeTitle: string;
  placeBody: string;
  addressLabel: string;
  address: string;
  hours: string;
  map: string;
  nearTitle: string;
  near: { name: string; dist: string }[];
  payTitle: string;
  pay: string[];
  faqEyebrow: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  formEyebrow: string;
  formTitle: string;
  formLead: string;
  stay: string;
  question: string;
  name: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
  note: string;
  notePh: string;
  estimate: string;
  nights: string;
  confirm: string;
  send: string;
  errName: string;
  errPhone: string;
  errDates: string;
  errRoom: string;
  doneTitle: string;
  doneBody: string;
  whatsapp: string;
  emailBtn: string;
  again: string;
  saved: string;
  direct: string;
  crowd: string;
  footerNote: string;
  share: string;
  copied: string;
};

const roomsBase = {
  room: 650000,
  deluxe: 820000,
  suite: 1100000,
} as const;

export const copy: Record<Lang, Copy> = {
  ru: {
    nav: {
      stay: "Дом",
      rooms: "Номера",
      gallery: "Кадры",
      reviews: "Отзывы",
      place: "Место",
      book: "Заявка",
    },
    soundOn: "Выключить звук",
    soundOff: "Включить звук",
    menu: "Меню",
    close: "Закрыть",
    kicker: "Яккасарай · Ташкент",
    title: "Тихий дом на шестнадцать комнат.",
    lead: "Новый бутик в посольском квартале. Штукатурка, лён и завтрак, который гости описывают отдельно от всего остального.",
    book: "Запросить номер",
    call: "Позвонить",
    from: "от",
    perNight: "за ночь",
    rating: "4.9 · 17 отзывов Google",
    facts: [
      { k: "Номера", v: "16" },
      { k: "Открыт", v: "фев 2026" },
      { k: "Заезд", v: "14:00" },
      { k: "Выезд", v: "12:00" },
      { k: "Стойка", v: "24 часа" },
    ],
    ribbon: ["вежливый персонал", "новые номера", "чисто", "завтрак", "тихий квартал", "просторная ванная"],
    storyEyebrow: "01 — дом",
    storyTitle: "Девяносто — это не этаж. Это пауза.",
    storyBody: [
      "NINETY стоит на проезде Занжирбог, 23А: Яккасарай, деревья, посольства и короткая дорога до Музея прикладного искусства.",
      "Шестнадцать номеров, три этажа, круглосуточная стойка. Бесплатный Wi‑Fi, парковка у дома, курение только на улице. Карты Visa и Mastercard, бесконтактная оплата и наличные.",
      "Прямая заявка часто спокойнее агрегатора: мы подтверждаем даты и сумму лично, по телефону или в WhatsApp.",
    ],
    modelEyebrow: "02 — объём",
    modelTitle: "Поверните дом.",
    modelBody: "Не план этажа — маленькая штукатурная модель. Потяните, чтобы обойти её. Окна теплеют сами.",
    modelHint: "Перетащите",
    roomsEyebrow: "03 — номера",
    roomsTitle: "Три способа остаться.",
    roomsNote:
      "Цены — ориентир за ночь для двоих, по открытым тарифам начала ноября (от 650 000 UZS). Итог подтверждает отель.",
    guestsWord: "гостя",
    choose: "Выбрать",
    amenity: ["Wi‑Fi", "кондиционер", "душ", "телевизор", "чайник", "сейф"],
    rooms: [
      {
        id: "room",
        name: "Room",
        blurb: "Компактный спокойный номер: лён, тёплый свет, всё необходимое на одну-две ночи.",
        price: roomsBase.room,
        sleeps: 2,
      },
      {
        id: "deluxe",
        name: "Deluxe",
        blurb: "Чуть больше воздуха и тот же новый дом. Удобен, если хочется задержаться.",
        price: roomsBase.deluxe,
        sleeps: 2,
      },
      {
        id: "suite",
        name: "Suite",
        blurb: "Угловой формат с местом посидеть у окна. Для троих или долгого заезда.",
        price: roomsBase.suite,
        sleeps: 3,
      },
    ],
    galleryEyebrow: "04 — кадры",
    galleryTitle: "Свет, штукатурка, стол.",
    galleryNote:
      "Кадры передают настроение дома. Живые фото гостей — на карте Google, рядом с отзывами.",
    filters: [
      { id: "all", label: "Все" },
      { id: "house", label: "Дом" },
      { id: "rooms", label: "Номера" },
      { id: "table", label: "Стол" },
    ],
    shots: [
      { key: "dusk", caption: "Синий час на проезде" },
      { key: "day", caption: "Дневной фасад" },
      { key: "lobby", caption: "Стойка и олива" },
      { key: "room", caption: "Лён и лампа" },
      { key: "suite", caption: "Угол у окна" },
      { key: "bath", caption: "Камень и пар" },
      { key: "breakfast", caption: "Утренний стол" },
    ],
    seeGoogle: "Открыть на карте",
    reviewsEyebrow: "05 — гости",
    reviewsTitle: "4.9 — и почти все про людей.",
    reviews: [
      {
        name: "Никита Антонов",
        meta: "Google · 5",
        stars: 5,
        text: "Отличный отель. Вежливый персонал, замечательное обслуживание. Вернули забытую вещь и передали в другую страну.",
      },
      {
        name: "Отабек Бозоров",
        meta: "Google · 5",
        stars: 5,
        text: "Новый, очень чистый и современный. Номера уютные. Завтрак вкусный и разный. Особенно — вежливое отношение.",
      },
      {
        name: "Павел Рыскаленко",
        meta: "Google · 5",
        stars: 5,
        text: "Свежий отель с современным интерьером. Тихий безопасный район с посольствами и удобное расположение.",
      },
      {
        name: "Nicky Chung",
        meta: "Google · 5",
        stars: 5,
        text: "После Ташкента, Самарканда, Бухары, Хивы и Нукуса этот отель оказался любимой частью поездки. Чисто, ванная просторная, хозяева внимательные.",
      },
      {
        name: "Иван Соколов",
        meta: "Google · 5",
        stars: 5,
        text: "Отличное соотношение цены и качества. Новый чистый отель с приветливым персоналом.",
      },
      {
        name: "Juls",
        meta: "Google · 5",
        stars: 5,
        text: "Вопрос решили уже на следующее утро. Отличная работа стойки и управляющего, очень чистые номера.",
      },
    ],
    placeEyebrow: "06 — место",
    placeTitle: "Яккасарай, не проспект.",
    placeBody:
      "Проезд Занжирбог, 23А. Район тихий, до аэропорта имени Ислама Каримова около пяти километров, до Музея прикладного искусства — короткая прогулка.",
    addressLabel: "Адрес",
    address: "23А, проезд Занжирбог, Яккасарай, Ташкент 100032",
    hours: "Стойка 24 часа · заезд 14:00 · выезд 12:00",
    map: "Маршрут",
    nearTitle: "Рядом",
    near: [
      { name: "Музей прикладного искусства", dist: "0.7 км" },
      { name: "Seattle Peace Park", dist: "1.2 км" },
      { name: "NEXT Mall", dist: "1.4 км" },
      { name: "Ice City", dist: "1.4 км" },
      { name: "Аэропорт TAS", dist: "4.6 км" },
    ],
    payTitle: "Как платят",
    pay: ["Visa", "Mastercard", "бесконтактно", "наличные", "Wi‑Fi бесплатно", "парковка у дома"],
    faqEyebrow: "Вопросы",
    faqTitle: "Коротко, до звонка.",
    faq: [
      {
        q: "Это подтверждённое бронирование?",
        a: "Нет. Форма собирает заявку и открывает WhatsApp, почту или звонок. Номер держится, когда администратор ответит.",
      },
      {
        q: "Завтрак входит?",
        a: "Гости его хвалят. Входит ли он в конкретный тариф — напишите в заявке, стойка ответит точно.",
      },
      {
        q: "Можно с поздним рейсом?",
        a: "Стойка работает круглосуточно. Напишите время прилёта в комментарии.",
      },
      {
        q: "Как отменить?",
        a: "Условия отмены называет отель при подтверждении. Не обещаем правила агрегаторов — у прямой заявки свои.",
      },
      {
        q: "На каких языках отвечают?",
        a: "Сайт — на узбекском, русском и английском. На стойке вас встретят; если нужен конкретный язык, укажите это в заявке.",
      },
    ],
    formEyebrow: "Заявка",
    formTitle: "Напишите напрямую.",
    formLead: "Соберём сообщение и отправим его администратору. Телефон +998 70 082 90 90, почта ninetyboutiquehotel@gmail.com.",
    stay: "Хочу номер",
    question: "Просто вопрос",
    name: "Имя",
    phone: "Телефон",
    email: "Почта",
    checkIn: "Заезд",
    checkOut: "Выезд",
    guests: "Гости",
    room: "Номер",
    note: "Комментарий",
    notePh: "Поздний заезд, детская кровать, завтрак…",
    estimate: "Ориентир",
    nights: "ноч.",
    confirm: "Финальную сумму подтверждает отель.",
    send: "Собрать заявку",
    errName: "Как к вам обращаться?",
    errPhone: "Нужен телефон, чтобы перезвонить.",
    errDates: "Выезд должен быть позже заезда.",
    errRoom: "Выберите номер.",
    doneTitle: "Заявка собрана.",
    doneBody: "Отправьте её сейчас — так стойка увидит даты и сумму. Это ещё не бронь, пока вам не ответят.",
    whatsapp: "WhatsApp",
    emailBtn: "Почта",
    again: "Новая заявка",
    saved: "Черновик сохранён на этом устройстве.",
    direct: "Прямой запрос. Без комиссии в форме — только разговор с домом.",
    crowd: "Гостей больше, чем в описании номера — уточните у стойки.",
    footerNote: "NINETY boutique hotel · 77W6+R6 Ташкент",
    share: "Поделиться",
    copied: "Ссылка скопирована",
  },
  uz: {
    nav: {
      stay: "Uy",
      rooms: "Xonalar",
      gallery: "Kadrlar",
      reviews: "Sharhlar",
      place: "Manzil",
      book: "So'rov",
    },
    soundOn: "Ovozni o'chirish",
    soundOff: "Ovozni yoqish",
    menu: "Menyu",
    close: "Yopish",
    kicker: "Yakkasaroy · Toshkent",
    title: "O'n olti xonali tinch uy.",
    lead: "Elchixonalar mavzesidagi yangi butik. Shuvoq, zig'ir mato va mehmonlar alohida eslaydigan nonushta.",
    book: "Xona so'rash",
    call: "Qo'ng'iroq",
    from: "dan",
    perNight: "tuniga",
    rating: "4.9 · Google'da 17 sharh",
    facts: [
      { k: "Xonalar", v: "16" },
      { k: "Ochilgan", v: "fev 2026" },
      { k: "Kirish", v: "14:00" },
      { k: "Chiqish", v: "12:00" },
      { k: "Qabulxona", v: "24 soat" },
    ],
    ribbon: ["muloyim xodimlar", "yangi xonalar", "toza", "nonushta", "tinch mahalla", "keng hammom"],
    storyEyebrow: "01 — uy",
    storyTitle: "To'qson — qavat emas. Pauza.",
    storyBody: [
      "NINETY Zanjirbog' o'tish yo'li, 23A da: Yakkasaroy, daraxtlar, elchixonalar va Amaliy san'at muzeyigacha qisqa yo'l.",
      "O'n olti xona, uch qavat, tunu kun qabulxona. Bepul Wi‑Fi, uy yonida avtoturargoh, chekish faqat tashqarida. Visa, Mastercard, kontaktsiz to'lov va naqd pul.",
      "To'g'ridan-to'g'ri so'rov ko'pincha agregatordan sokinroq: sanalar va summani telefon yoki WhatsApp orqali o'zimiz tasdiqlaymiz.",
    ],
    modelEyebrow: "02 — hajm",
    modelTitle: "Uyni aylantiring.",
    modelBody: "Qavat chizmasi emas — kichik shuvoq model. Aylanasi uchun suring. Derazalar o'zi isiydi.",
    modelHint: "Suring",
    roomsEyebrow: "03 — xonalar",
    roomsTitle: "Qolishning uch yo'li.",
    roomsNote:
      "Narxlar ikki kishi uchun bir tunlik mo'ljal, noyabr boshidagi ochiq tariflardan (650 000 UZS dan). Yakuniy summani mehmonxona tasdiqlaydi.",
    guestsWord: "mehmon",
    choose: "Tanlash",
    amenity: ["Wi‑Fi", "konditsioner", "dush", "televizor", "choynak", "seyf"],
    rooms: [
      {
        id: "room",
        name: "Room",
        blurb: "Ixcham tinch xona: zig'ir, iliq yorug'lik, bir-ikki tun uchun kerakli narsa.",
        price: roomsBase.room,
        sleeps: 2,
      },
      {
        id: "deluxe",
        name: "Deluxe",
        blurb: "Biroz kengroq havo, o'sha yangi uy. Uzoqroq qolmoqchi bo'lsangiz qulay.",
        price: roomsBase.deluxe,
        sleeps: 2,
      },
      {
        id: "suite",
        name: "Suite",
        blurb: "Deraza yonida o'tirish joyi bor burchak. Uch kishi yoki uzoq turar joy uchun.",
        price: roomsBase.suite,
        sleeps: 3,
      },
    ],
    galleryEyebrow: "04 — kadrlar",
    galleryTitle: "Yorug'lik, shuvoq, dasturxon.",
    galleryNote: "Kadrlar uyning kayfiyatini ko'rsatadi. Mehmonlarning jonli suratlari Google xaritasida, sharhlar yonida.",
    filters: [
      { id: "all", label: "Barchasi" },
      { id: "house", label: "Uy" },
      { id: "rooms", label: "Xonalar" },
      { id: "table", label: "Dasturxon" },
    ],
    shots: [
      { key: "dusk", caption: "O'tish yo'lidagi ko'k soat" },
      { key: "day", caption: "Kunduzgi fasad" },
      { key: "lobby", caption: "Qabulxona va zaytun" },
      { key: "room", caption: "Zig'ir va lampa" },
      { key: "suite", caption: "Deraza burchagi" },
      { key: "bath", caption: "Tosh va bug'" },
      { key: "breakfast", caption: "Ertalabki dasturxon" },
    ],
    seeGoogle: "Xaritada ochish",
    reviewsEyebrow: "05 — mehmonlar",
    reviewsTitle: "4.9 — deyarli hammasi odamlar haqida.",
    reviews: [
      {
        name: "Nikita Antonov",
        meta: "Google · 5",
        stars: 5,
        text: "Ajoyib mehmonxona. Xushmuomala xodimlar, zo'r xizmat. Unutilgan buyumni qaytarib, boshqa mamlakatga yuborishgan.",
      },
      {
        name: "Otabek Bozorov",
        meta: "Google · 5",
        stars: 5,
        text: "Yangi, juda toza va zamonaviy. Xonalar shinam. Nonushta mazali va xilma-xil. Ayniqsa muloyim munosabat yoqdi.",
      },
      {
        name: "Pavel Ryskalenko",
        meta: "Google · 5",
        stars: 5,
        text: "Zamonaviy interyerli yangi mehmonxona. Elchixonalar bor tinch va xavfsiz hudud, joylashuvi qulay.",
      },
      {
        name: "Nicky Chung",
        meta: "Google · 5",
        stars: 5,
        text: "Toshkent, Samarqand, Buxoro, Xiva va Nukusdagi safardan keyin shu mehmonxona eng sevimli qism bo'ldi. Toza, hammom keng, egalari e'tiborli.",
      },
      {
        name: "Ivan Sokolov",
        meta: "Google · 5",
        stars: 5,
        text: "Narx va sifat nisbati a'lo. Yangi, toza mehmonxona, xodimlar samimiy.",
      },
      {
        name: "Juls",
        meta: "Google · 5",
        stars: 5,
        text: "Masala ertasiga ertalab hal bo'ldi. Qabulxona va menejer a'lo ishladi, xonalar juda toza.",
      },
    ],
    placeEyebrow: "06 — manzil",
    placeTitle: "Yakkasaroy, prospekt emas.",
    placeBody:
      "Zanjirbog' o'tish yo'li, 23A. Hudud tinch. Islom Karimov nomidagi aeroportgacha taxminan besh kilometr, Amaliy san'at muzeyigacha esa qisqa piyoda yo'l.",
    addressLabel: "Manzil",
    address: "23A, Zanjirbog' o'tish yo'li, Yakkasaroy, Toshkent 100032",
    hours: "Qabulxona 24 soat · kirish 14:00 · chiqish 12:00",
    map: "Yo'nalish",
    nearTitle: "Yaqinda",
    near: [
      { name: "Amaliy san'at muzeyi", dist: "0.7 km" },
      { name: "Seattle Peace Park", dist: "1.2 km" },
      { name: "NEXT Mall", dist: "1.4 km" },
      { name: "Ice City", dist: "1.4 km" },
      { name: "TAS aeroporti", dist: "4.6 km" },
    ],
    payTitle: "To'lov",
    pay: ["Visa", "Mastercard", "kontaktsiz", "naqd", "bepul Wi‑Fi", "uy yonida turargoh"],
    faqEyebrow: "Savollar",
    faqTitle: "Qo'ng'iroqdan oldin, qisqa.",
    faq: [
      {
        q: "Bu tasdiqlangan bronmi?",
        a: "Yo'q. Forma so'rov yig'adi va WhatsApp, pochta yoki qo'ng'iroqni ochadi. Xona administrator javob bergach saqlanadi.",
      },
      {
        q: "Nonushta kiradimi?",
        a: "Mehmonlar uni maqtashadi. Aniq tarifga kirishi-kirmasligini so'rovda yozing — qabulxona aniq aytadi.",
      },
      {
        q: "Kechki reys bilan bo'ladimi?",
        a: "Qabulxona tunu kun ishlaydi. Qo'nish vaqtini izohga yozing.",
      },
      {
        q: "Qanday bekor qilinadi?",
        a: "Bekor qilish shartini mehmonxona tasdiqlashda aytadi. Agregator qoidalarini va'da qilmaymiz.",
      },
      {
        q: "Qaysi tillarda javob berishadi?",
        a: "Sayt o'zbek, rus va ingliz tillarida. Qabulxonada kutib olishadi; kerakli tilni so'rovda yozing.",
      },
    ],
    formEyebrow: "So'rov",
    formTitle: "To'g'ridan-to'g'ri yozing.",
    formLead: "Xabarni yig'amiz va administratorga yuboramiz. Telefon +998 70 082 90 90, pochta ninetyboutiquehotel@gmail.com.",
    stay: "Xona kerak",
    question: "Shunchaki savol",
    name: "Ism",
    phone: "Telefon",
    email: "Pochta",
    checkIn: "Kirish",
    checkOut: "Chiqish",
    guests: "Mehmonlar",
    room: "Xona",
    note: "Izoh",
    notePh: "Kechki kirish, bolalar krovati, nonushta…",
    estimate: "Mo'ljal",
    nights: "tun",
    confirm: "Yakuniy summani mehmonxona tasdiqlaydi.",
    send: "So'rov yig'ish",
    errName: "Sizga qanday murojaat qilaylik?",
    errPhone: "Qayta qo'ng'iroq uchun telefon kerak.",
    errDates: "Chiqish kirishdan keyin bo'lishi kerak.",
    errRoom: "Xonani tanlang.",
    doneTitle: "So'rov tayyor.",
    doneBody: "Hozir yuboring — qabulxona sanalar va summani ko'radi. Javob kelmaguncha bu bron emas.",
    whatsapp: "WhatsApp",
    emailBtn: "Pochta",
    again: "Yangi so'rov",
    saved: "Qoralama shu qurilmada saqlandi.",
    direct: "To'g'ridan-to'g'ri so'rov. Formada komissiya yo'q — faqat uy bilan suhbat.",
    crowd: "Mehmonlar xona tavsifidagidan ko'p — qabulxonadan so'rang.",
    footerNote: "NINETY boutique hotel · 77W6+R6 Toshkent",
    share: "Ulashish",
    copied: "Havola nusxalandi",
  },
  en: {
    nav: {
      stay: "House",
      rooms: "Rooms",
      gallery: "Frames",
      reviews: "Reviews",
      place: "Place",
      book: "Request",
    },
    soundOn: "Mute sound",
    soundOff: "Play sound",
    menu: "Menu",
    close: "Close",
    kicker: "Yakkasaray · Tashkent",
    title: "A quiet house of sixteen rooms.",
    lead: "A new boutique in the embassy quarter. Plaster, linen, and a breakfast guests mention on its own.",
    book: "Request a room",
    call: "Call",
    from: "from",
    perNight: "a night",
    rating: "4.9 · 17 Google reviews",
    facts: [
      { k: "Rooms", v: "16" },
      { k: "Opened", v: "Feb 2026" },
      { k: "Check-in", v: "14:00" },
      { k: "Check-out", v: "12:00" },
      { k: "Desk", v: "24 hours" },
    ],
    ribbon: ["polite staff", "new rooms", "very clean", "breakfast", "quiet quarter", "spacious bath"],
    storyEyebrow: "01 — the house",
    storyTitle: "Ninety is not a floor. It is a pause.",
    storyBody: [
      "NINETY is at 23A Zanjirbog passage: Yakkasaray, trees, embassies, and a short walk to the Museum of Applied Arts.",
      "Sixteen rooms, three floors, a desk that never closes. Free Wi‑Fi, parking at the house, smoking outside only. Visa, Mastercard, contactless and cash.",
      "A direct request is often calmer than an aggregator: we confirm the dates and the figure ourselves, by phone or WhatsApp.",
    ],
    modelEyebrow: "02 — volume",
    modelTitle: "Turn the house.",
    modelBody: "Not a floor plan — a small plaster model. Drag to walk around it. The windows warm on their own.",
    modelHint: "Drag",
    roomsEyebrow: "03 — rooms",
    roomsTitle: "Three ways to stay.",
    roomsNote:
      "Rates are a guide per night for two, from public prices in early November (from 650,000 UZS). The hotel confirms the final figure.",
    guestsWord: "guests",
    choose: "Choose",
    amenity: ["Wi‑Fi", "air conditioning", "shower", "television", "kettle", "safe"],
    rooms: [
      {
        id: "room",
        name: "Room",
        blurb: "A compact quiet room: linen, warm light, enough for one or two nights.",
        price: roomsBase.room,
        sleeps: 2,
      },
      {
        id: "deluxe",
        name: "Deluxe",
        blurb: "A little more air in the same new house. Easy if you want to linger.",
        price: roomsBase.deluxe,
        sleeps: 2,
      },
      {
        id: "suite",
        name: "Suite",
        blurb: "A corner with a place to sit by the window. For three, or a longer stay.",
        price: roomsBase.suite,
        sleeps: 3,
      },
    ],
    galleryEyebrow: "04 — frames",
    galleryTitle: "Light, plaster, table.",
    galleryNote: "These frames suggest the mood of the house. Guest photos live on Google Maps, beside the reviews.",
    filters: [
      { id: "all", label: "All" },
      { id: "house", label: "House" },
      { id: "rooms", label: "Rooms" },
      { id: "table", label: "Table" },
    ],
    shots: [
      { key: "dusk", caption: "Blue hour on the passage" },
      { key: "day", caption: "Daylight facade" },
      { key: "lobby", caption: "Desk and olive" },
      { key: "room", caption: "Linen and lamp" },
      { key: "suite", caption: "Corner by the window" },
      { key: "bath", caption: "Stone and steam" },
      { key: "breakfast", caption: "Morning table" },
    ],
    seeGoogle: "Open the map",
    reviewsEyebrow: "05 — guests",
    reviewsTitle: "4.9 — and almost all of it is about people.",
    reviews: [
      {
        name: "Nikita Antonov",
        meta: "Google · 5",
        stars: 5,
        text: "An excellent hotel. Polite staff and fine service. They returned a forgotten item and sent it to another country.",
      },
      {
        name: "Otabek Bozorov",
        meta: "Google · 5",
        stars: 5,
        text: "New, very clean and modern. Cozy rooms. Breakfast was tasty and varied. The kindness stood out.",
      },
      {
        name: "Pavel Ryskalenko",
        meta: "Google · 5",
        stars: 5,
        text: "A fresh hotel with a modern interior. A quiet, safe district of embassies, and an easy location.",
      },
      {
        name: "Nicky Chung",
        meta: "Google · 5",
        stars: 5,
        text: "After Tashkent, Samarkand, Bukhara, Khiva and Nukus, this hotel was the favorite part of the trip. Clean, a spacious bath, attentive hosts.",
      },
      {
        name: "Ivan Sokolov",
        meta: "Google · 5",
        stars: 5,
        text: "Excellent value. A new, clean hotel with friendly staff.",
      },
      {
        name: "Juls",
        meta: "Google · 5",
        stars: 5,
        text: "An issue was fixed the next morning. Excellent work from the desk and the manager, and extremely clean rooms.",
      },
    ],
    placeEyebrow: "06 — place",
    placeTitle: "Yakkasaray, not the avenue.",
    placeBody:
      "23A Zanjirbog passage. A quiet district, about five kilometres from Islam Karimov Airport, a short walk from the Museum of Applied Arts.",
    addressLabel: "Address",
    address: "23A Zanjirbog passage, Yakkasaray, Tashkent 100032",
    hours: "Desk 24 hours · check-in 14:00 · check-out 12:00",
    map: "Directions",
    nearTitle: "Nearby",
    near: [
      { name: "Museum of Applied Arts", dist: "0.7 km" },
      { name: "Seattle Peace Park", dist: "1.2 km" },
      { name: "NEXT Mall", dist: "1.4 km" },
      { name: "Ice City", dist: "1.4 km" },
      { name: "TAS airport", dist: "4.6 km" },
    ],
    payTitle: "How guests pay",
    pay: ["Visa", "Mastercard", "contactless", "cash", "free Wi‑Fi", "parking at the house"],
    faqEyebrow: "Questions",
    faqTitle: "Short, before the call.",
    faq: [
      {
        q: "Is this a confirmed booking?",
        a: "No. The form builds a request and opens WhatsApp, email or a call. The room is held when the desk replies.",
      },
      {
        q: "Is breakfast included?",
        a: "Guests praise it. Whether it sits inside a given rate — write it in the request and the desk will say exactly.",
      },
      {
        q: "Late flight?",
        a: "The desk is open all night. Put your landing time in the note.",
      },
      {
        q: "How do cancellations work?",
        a: "The hotel names the terms when it confirms. We do not promise aggregator rules — a direct request has its own.",
      },
      {
        q: "Which languages?",
        a: "The site is in Uzbek, Russian and English. The desk will meet you; if you need a specific language, say so in the request.",
      },
    ],
    formEyebrow: "Request",
    formTitle: "Write to the house.",
    formLead: "We compose the message and hand it to the desk. Phone +998 70 082 90 90, email ninetyboutiquehotel@gmail.com.",
    stay: "I need a room",
    question: "Just a question",
    name: "Name",
    phone: "Phone",
    email: "Email",
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    room: "Room",
    note: "Note",
    notePh: "Late arrival, a cot, breakfast…",
    estimate: "Guide",
    nights: "nts",
    confirm: "The hotel confirms the final amount.",
    send: "Compose request",
    errName: "What should we call you?",
    errPhone: "A phone number, so we can call back.",
    errDates: "Check-out has to be after check-in.",
    errRoom: "Choose a room.",
    doneTitle: "Request composed.",
    doneBody: "Send it now so the desk sees the dates and the figure. It is not a booking until they reply.",
    whatsapp: "WhatsApp",
    emailBtn: "Email",
    again: "New request",
    saved: "Draft saved on this device.",
    direct: "A direct request. No fee in the form — only a conversation with the house.",
    crowd: "More guests than the room description — ask the desk.",
    footerNote: "NINETY boutique hotel · 77W6+R6 Tashkent",
    share: "Share",
    copied: "Link copied",
  },
};

export const PHONE = "+998700829090";
export const PHONE_PRETTY = "+998 70 082 90 90";
export const EMAIL = "ninetyboutiquehotel@gmail.com";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=41.29704,69.26071";
export const OSM =
  "https://www.openstreetmap.org/export/embed.html?bbox=69.2525%2C41.2938%2C69.2689%2C41.3003&layer=mapnik&marker=41.29704%2C69.26071";

export const GALLERY: { key: string; src: string; cat: "house" | "rooms" | "table" }[] = [
  { key: "dusk", src: "/media/dusk.jpg", cat: "house" },
  { key: "day", src: "/media/day.jpg", cat: "house" },
  { key: "lobby", src: "/media/lobby.jpg", cat: "house" },
  { key: "room", src: "/media/room.jpg", cat: "rooms" },
  { key: "suite", src: "/media/suite.jpg", cat: "rooms" },
  { key: "bath", src: "/media/bath.jpg", cat: "rooms" },
  { key: "breakfast", src: "/media/breakfast.jpg", cat: "table" },
];

export function money(value: number, lang: Lang) {
  const locale = lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : "en-US";
  return `${new Intl.NumberFormat(locale).format(value)} UZS`;
}

export function nightCount(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(`${checkIn}T00:00:00`);
  const end = new Date(`${checkOut}T00:00:00`);
  const diff = Math.round((end.getTime() - start.getTime()) / 86400000);
  return diff > 0 ? diff : 0;
}
