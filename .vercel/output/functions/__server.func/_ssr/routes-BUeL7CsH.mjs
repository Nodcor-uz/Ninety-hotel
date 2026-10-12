import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Star, c as MapPin, l as Mail, n as VolumeX, o as Phone, r as Volume2, s as Menu, t as X, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUeL7CsH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Maquette() {
	const wrap = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!wrap.current) return;
		let dead = false;
		let dispose = () => {};
		import("../_libs/three.mjs").then((n) => n.t).then((THREE) => {
			if (dead || !wrap.current) return;
			const host = wrap.current;
			const renderer = new THREE.WebGLRenderer({
				antialias: true,
				alpha: true
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.setSize(host.clientWidth, Math.max(host.clientHeight, 1));
			renderer.setClearColor(0, 0);
			renderer.domElement.style.width = "100%";
			renderer.domElement.style.height = "100%";
			renderer.domElement.style.display = "block";
			host.appendChild(renderer.domElement);
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(32, host.clientWidth / Math.max(host.clientHeight, 1), .1, 40);
			camera.position.set(4.4, 2.5, 5.6);
			const group = new THREE.Group();
			scene.add(group);
			const plaster = new THREE.MeshStandardMaterial({
				color: 15127484,
				roughness: .88
			});
			const dark = new THREE.MeshStandardMaterial({
				color: 1840916,
				roughness: .62
			});
			const glass = new THREE.MeshStandardMaterial({
				color: 16761994,
				emissive: 12868670,
				emissiveIntensity: .8,
				roughness: .4
			});
			const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.75, 1.45), plaster);
			body.position.y = .98;
			group.add(body);
			const roof = new THREE.Mesh(new THREE.BoxGeometry(2.66, .08, 1.6), dark);
			roof.position.y = 1.9;
			group.add(roof);
			for (let floor = 0; floor < 3; floor++) for (let col = 0; col < 4; col++) {
				const windowPane = new THREE.Mesh(new THREE.BoxGeometry(.16, .34, .05), glass);
				windowPane.position.set(-.9 + col * .6, .48 + floor * .48, .75);
				group.add(windowPane);
			}
			const canopy = new THREE.Mesh(new THREE.BoxGeometry(.72, .045, .38), dark);
			canopy.position.set(.15, .78, .92);
			group.add(canopy);
			const door = new THREE.Mesh(new THREE.BoxGeometry(.28, .48, .04), dark);
			door.position.set(.15, .34, .74);
			group.add(door);
			const ground = new THREE.Mesh(new THREE.CircleGeometry(3.4, 48), new THREE.MeshStandardMaterial({
				color: 14997446,
				roughness: 1
			}));
			ground.rotation.x = -Math.PI / 2;
			scene.add(ground);
			scene.add(new THREE.AmbientLight(16052200, .75));
			const sun = new THREE.DirectionalLight(16774116, 1.5);
			sun.position.set(4, 6, 3);
			scene.add(sun);
			const glow = new THREE.PointLight(12868670, 3, 9);
			glow.position.set(.2, 1.1, 1.4);
			scene.add(glow);
			const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			let dragging = false;
			let lastX = 0;
			let vel = reduce ? 0 : .0035;
			const onDown = (event) => {
				dragging = true;
				lastX = event.clientX;
			};
			const onMove = (event) => {
				if (!dragging) return;
				const dx = event.clientX - lastX;
				lastX = event.clientX;
				group.rotation.y += dx * .01;
				vel = dx * 35e-5;
			};
			const onUp = () => {
				dragging = false;
			};
			host.addEventListener("pointerdown", onDown);
			window.addEventListener("pointermove", onMove);
			window.addEventListener("pointerup", onUp);
			let raf = 0;
			const clock = new THREE.Clock();
			const loop = () => {
				raf = requestAnimationFrame(loop);
				if (!dragging) group.rotation.y += vel;
				glass.emissiveIntensity = .65 + Math.sin(clock.getElapsedTime() * 1.5) * .12;
				camera.lookAt(0, .9, 0);
				renderer.render(scene, camera);
			};
			loop();
			const fit = () => {
				const w = host.clientWidth;
				const h = Math.max(host.clientHeight, 1);
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
				renderer.setSize(w, h);
			};
			const observer = new ResizeObserver(fit);
			observer.observe(host);
			const teardown = () => {
				cancelAnimationFrame(raf);
				observer.disconnect();
				host.removeEventListener("pointerdown", onDown);
				window.removeEventListener("pointermove", onMove);
				window.removeEventListener("pointerup", onUp);
				renderer.dispose();
				plaster.dispose();
				dark.dispose();
				glass.dispose();
				if (renderer.domElement.parentElement === host) host.removeChild(renderer.domElement);
			};
			if (dead) teardown();
			else dispose = teardown;
		});
		return () => {
			dead = true;
			dispose();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrap,
		className: "h-full min-h-72 w-full touch-none"
	});
}
var roomsBase = {
	room: 65e4,
	deluxe: 82e4,
	suite: 11e5
};
var copy = {
	ru: {
		nav: {
			stay: "Дом",
			rooms: "Номера",
			gallery: "Кадры",
			reviews: "Отзывы",
			place: "Место",
			book: "Заявка"
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
			{
				k: "Номера",
				v: "16"
			},
			{
				k: "Открыт",
				v: "фев 2026"
			},
			{
				k: "Заезд",
				v: "14:00"
			},
			{
				k: "Выезд",
				v: "12:00"
			},
			{
				k: "Стойка",
				v: "24 часа"
			}
		],
		ribbon: [
			"вежливый персонал",
			"новые номера",
			"чисто",
			"завтрак",
			"тихий квартал",
			"просторная ванная"
		],
		storyEyebrow: "01 — дом",
		storyTitle: "Девяносто — это не этаж. Это пауза.",
		storyBody: [
			"NINETY стоит на проезде Занжирбог, 23А: Яккасарай, деревья, посольства и короткая дорога до Музея прикладного искусства.",
			"Шестнадцать номеров, три этажа, круглосуточная стойка. Бесплатный Wi‑Fi, парковка у дома, курение только на улице. Карты Visa и Mastercard, бесконтактная оплата и наличные.",
			"Прямая заявка часто спокойнее агрегатора: мы подтверждаем даты и сумму лично, по телефону или в WhatsApp."
		],
		modelEyebrow: "02 — объём",
		modelTitle: "Поверните дом.",
		modelBody: "Не план этажа — маленькая штукатурная модель. Потяните, чтобы обойти её. Окна теплеют сами.",
		modelHint: "Перетащите",
		roomsEyebrow: "03 — номера",
		roomsTitle: "Три способа остаться.",
		roomsNote: "Цены — ориентир за ночь для двоих, по открытым тарифам начала ноября (от 650 000 UZS). Итог подтверждает отель.",
		guestsWord: "гостя",
		choose: "Выбрать",
		amenity: [
			"Wi‑Fi",
			"кондиционер",
			"душ",
			"телевизор",
			"чайник",
			"сейф"
		],
		rooms: [
			{
				id: "room",
				name: "Room",
				blurb: "Компактный спокойный номер: лён, тёплый свет, всё необходимое на одну-две ночи.",
				price: roomsBase.room,
				sleeps: 2
			},
			{
				id: "deluxe",
				name: "Deluxe",
				blurb: "Чуть больше воздуха и тот же новый дом. Удобен, если хочется задержаться.",
				price: roomsBase.deluxe,
				sleeps: 2
			},
			{
				id: "suite",
				name: "Suite",
				blurb: "Угловой формат с местом посидеть у окна. Для троих или долгого заезда.",
				price: roomsBase.suite,
				sleeps: 3
			}
		],
		galleryEyebrow: "04 — кадры",
		galleryTitle: "Свет, штукатурка, стол.",
		galleryNote: "Кадры передают настроение дома. Живые фото гостей — на карте Google, рядом с отзывами.",
		filters: [
			{
				id: "all",
				label: "Все"
			},
			{
				id: "house",
				label: "Дом"
			},
			{
				id: "rooms",
				label: "Номера"
			},
			{
				id: "table",
				label: "Стол"
			}
		],
		shots: [
			{
				key: "dusk",
				caption: "Синий час на проезде"
			},
			{
				key: "day",
				caption: "Дневной фасад"
			},
			{
				key: "lobby",
				caption: "Стойка и олива"
			},
			{
				key: "room",
				caption: "Лён и лампа"
			},
			{
				key: "suite",
				caption: "Угол у окна"
			},
			{
				key: "bath",
				caption: "Камень и пар"
			},
			{
				key: "breakfast",
				caption: "Утренний стол"
			}
		],
		seeGoogle: "Открыть на карте",
		reviewsEyebrow: "05 — гости",
		reviewsTitle: "4.9 — и почти все про людей.",
		reviews: [
			{
				name: "Никита Антонов",
				meta: "Google · 5",
				stars: 5,
				text: "Отличный отель. Вежливый персонал, замечательное обслуживание. Вернули забытую вещь и передали в другую страну."
			},
			{
				name: "Отабек Бозоров",
				meta: "Google · 5",
				stars: 5,
				text: "Новый, очень чистый и современный. Номера уютные. Завтрак вкусный и разный. Особенно — вежливое отношение."
			},
			{
				name: "Павел Рыскаленко",
				meta: "Google · 5",
				stars: 5,
				text: "Свежий отель с современным интерьером. Тихий безопасный район с посольствами и удобное расположение."
			},
			{
				name: "Nicky Chung",
				meta: "Google · 5",
				stars: 5,
				text: "После Ташкента, Самарканда, Бухары, Хивы и Нукуса этот отель оказался любимой частью поездки. Чисто, ванная просторная, хозяева внимательные."
			},
			{
				name: "Иван Соколов",
				meta: "Google · 5",
				stars: 5,
				text: "Отличное соотношение цены и качества. Новый чистый отель с приветливым персоналом."
			},
			{
				name: "Juls",
				meta: "Google · 5",
				stars: 5,
				text: "Вопрос решили уже на следующее утро. Отличная работа стойки и управляющего, очень чистые номера."
			}
		],
		placeEyebrow: "06 — место",
		placeTitle: "Яккасарай, не проспект.",
		placeBody: "Проезд Занжирбог, 23А. Район тихий, до аэропорта имени Ислама Каримова около пяти километров, до Музея прикладного искусства — короткая прогулка.",
		addressLabel: "Адрес",
		address: "23А, проезд Занжирбог, Яккасарай, Ташкент 100032",
		hours: "Стойка 24 часа · заезд 14:00 · выезд 12:00",
		map: "Маршрут",
		nearTitle: "Рядом",
		near: [
			{
				name: "Музей прикладного искусства",
				dist: "0.7 км"
			},
			{
				name: "Seattle Peace Park",
				dist: "1.2 км"
			},
			{
				name: "NEXT Mall",
				dist: "1.4 км"
			},
			{
				name: "Ice City",
				dist: "1.4 км"
			},
			{
				name: "Аэропорт TAS",
				dist: "4.6 км"
			}
		],
		payTitle: "Как платят",
		pay: [
			"Visa",
			"Mastercard",
			"бесконтактно",
			"наличные",
			"Wi‑Fi бесплатно",
			"парковка у дома"
		],
		faqEyebrow: "Вопросы",
		faqTitle: "Коротко, до звонка.",
		faq: [
			{
				q: "Это подтверждённое бронирование?",
				a: "Нет. Форма собирает заявку и открывает WhatsApp, почту или звонок. Номер держится, когда администратор ответит."
			},
			{
				q: "Завтрак входит?",
				a: "Гости его хвалят. Входит ли он в конкретный тариф — напишите в заявке, стойка ответит точно."
			},
			{
				q: "Можно с поздним рейсом?",
				a: "Стойка работает круглосуточно. Напишите время прилёта в комментарии."
			},
			{
				q: "Как отменить?",
				a: "Условия отмены называет отель при подтверждении. Не обещаем правила агрегаторов — у прямой заявки свои."
			},
			{
				q: "На каких языках отвечают?",
				a: "Сайт — на узбекском, русском и английском. На стойке вас встретят; если нужен конкретный язык, укажите это в заявке."
			}
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
		copied: "Ссылка скопирована"
	},
	uz: {
		nav: {
			stay: "Uy",
			rooms: "Xonalar",
			gallery: "Kadrlar",
			reviews: "Sharhlar",
			place: "Manzil",
			book: "So'rov"
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
			{
				k: "Xonalar",
				v: "16"
			},
			{
				k: "Ochilgan",
				v: "fev 2026"
			},
			{
				k: "Kirish",
				v: "14:00"
			},
			{
				k: "Chiqish",
				v: "12:00"
			},
			{
				k: "Qabulxona",
				v: "24 soat"
			}
		],
		ribbon: [
			"muloyim xodimlar",
			"yangi xonalar",
			"toza",
			"nonushta",
			"tinch mahalla",
			"keng hammom"
		],
		storyEyebrow: "01 — uy",
		storyTitle: "To'qson — qavat emas. Pauza.",
		storyBody: [
			"NINETY Zanjirbog' o'tish yo'li, 23A da: Yakkasaroy, daraxtlar, elchixonalar va Amaliy san'at muzeyigacha qisqa yo'l.",
			"O'n olti xona, uch qavat, tunu kun qabulxona. Bepul Wi‑Fi, uy yonida avtoturargoh, chekish faqat tashqarida. Visa, Mastercard, kontaktsiz to'lov va naqd pul.",
			"To'g'ridan-to'g'ri so'rov ko'pincha agregatordan sokinroq: sanalar va summani telefon yoki WhatsApp orqali o'zimiz tasdiqlaymiz."
		],
		modelEyebrow: "02 — hajm",
		modelTitle: "Uyni aylantiring.",
		modelBody: "Qavat chizmasi emas — kichik shuvoq model. Aylanasi uchun suring. Derazalar o'zi isiydi.",
		modelHint: "Suring",
		roomsEyebrow: "03 — xonalar",
		roomsTitle: "Qolishning uch yo'li.",
		roomsNote: "Narxlar ikki kishi uchun bir tunlik mo'ljal, noyabr boshidagi ochiq tariflardan (650 000 UZS dan). Yakuniy summani mehmonxona tasdiqlaydi.",
		guestsWord: "mehmon",
		choose: "Tanlash",
		amenity: [
			"Wi‑Fi",
			"konditsioner",
			"dush",
			"televizor",
			"choynak",
			"seyf"
		],
		rooms: [
			{
				id: "room",
				name: "Room",
				blurb: "Ixcham tinch xona: zig'ir, iliq yorug'lik, bir-ikki tun uchun kerakli narsa.",
				price: roomsBase.room,
				sleeps: 2
			},
			{
				id: "deluxe",
				name: "Deluxe",
				blurb: "Biroz kengroq havo, o'sha yangi uy. Uzoqroq qolmoqchi bo'lsangiz qulay.",
				price: roomsBase.deluxe,
				sleeps: 2
			},
			{
				id: "suite",
				name: "Suite",
				blurb: "Deraza yonida o'tirish joyi bor burchak. Uch kishi yoki uzoq turar joy uchun.",
				price: roomsBase.suite,
				sleeps: 3
			}
		],
		galleryEyebrow: "04 — kadrlar",
		galleryTitle: "Yorug'lik, shuvoq, dasturxon.",
		galleryNote: "Kadrlar uyning kayfiyatini ko'rsatadi. Mehmonlarning jonli suratlari Google xaritasida, sharhlar yonida.",
		filters: [
			{
				id: "all",
				label: "Barchasi"
			},
			{
				id: "house",
				label: "Uy"
			},
			{
				id: "rooms",
				label: "Xonalar"
			},
			{
				id: "table",
				label: "Dasturxon"
			}
		],
		shots: [
			{
				key: "dusk",
				caption: "O'tish yo'lidagi ko'k soat"
			},
			{
				key: "day",
				caption: "Kunduzgi fasad"
			},
			{
				key: "lobby",
				caption: "Qabulxona va zaytun"
			},
			{
				key: "room",
				caption: "Zig'ir va lampa"
			},
			{
				key: "suite",
				caption: "Deraza burchagi"
			},
			{
				key: "bath",
				caption: "Tosh va bug'"
			},
			{
				key: "breakfast",
				caption: "Ertalabki dasturxon"
			}
		],
		seeGoogle: "Xaritada ochish",
		reviewsEyebrow: "05 — mehmonlar",
		reviewsTitle: "4.9 — deyarli hammasi odamlar haqida.",
		reviews: [
			{
				name: "Nikita Antonov",
				meta: "Google · 5",
				stars: 5,
				text: "Ajoyib mehmonxona. Xushmuomala xodimlar, zo'r xizmat. Unutilgan buyumni qaytarib, boshqa mamlakatga yuborishgan."
			},
			{
				name: "Otabek Bozorov",
				meta: "Google · 5",
				stars: 5,
				text: "Yangi, juda toza va zamonaviy. Xonalar shinam. Nonushta mazali va xilma-xil. Ayniqsa muloyim munosabat yoqdi."
			},
			{
				name: "Pavel Ryskalenko",
				meta: "Google · 5",
				stars: 5,
				text: "Zamonaviy interyerli yangi mehmonxona. Elchixonalar bor tinch va xavfsiz hudud, joylashuvi qulay."
			},
			{
				name: "Nicky Chung",
				meta: "Google · 5",
				stars: 5,
				text: "Toshkent, Samarqand, Buxoro, Xiva va Nukusdagi safardan keyin shu mehmonxona eng sevimli qism bo'ldi. Toza, hammom keng, egalari e'tiborli."
			},
			{
				name: "Ivan Sokolov",
				meta: "Google · 5",
				stars: 5,
				text: "Narx va sifat nisbati a'lo. Yangi, toza mehmonxona, xodimlar samimiy."
			},
			{
				name: "Juls",
				meta: "Google · 5",
				stars: 5,
				text: "Masala ertasiga ertalab hal bo'ldi. Qabulxona va menejer a'lo ishladi, xonalar juda toza."
			}
		],
		placeEyebrow: "06 — manzil",
		placeTitle: "Yakkasaroy, prospekt emas.",
		placeBody: "Zanjirbog' o'tish yo'li, 23A. Hudud tinch. Islom Karimov nomidagi aeroportgacha taxminan besh kilometr, Amaliy san'at muzeyigacha esa qisqa piyoda yo'l.",
		addressLabel: "Manzil",
		address: "23A, Zanjirbog' o'tish yo'li, Yakkasaroy, Toshkent 100032",
		hours: "Qabulxona 24 soat · kirish 14:00 · chiqish 12:00",
		map: "Yo'nalish",
		nearTitle: "Yaqinda",
		near: [
			{
				name: "Amaliy san'at muzeyi",
				dist: "0.7 km"
			},
			{
				name: "Seattle Peace Park",
				dist: "1.2 km"
			},
			{
				name: "NEXT Mall",
				dist: "1.4 km"
			},
			{
				name: "Ice City",
				dist: "1.4 km"
			},
			{
				name: "TAS aeroporti",
				dist: "4.6 km"
			}
		],
		payTitle: "To'lov",
		pay: [
			"Visa",
			"Mastercard",
			"kontaktsiz",
			"naqd",
			"bepul Wi‑Fi",
			"uy yonida turargoh"
		],
		faqEyebrow: "Savollar",
		faqTitle: "Qo'ng'iroqdan oldin, qisqa.",
		faq: [
			{
				q: "Bu tasdiqlangan bronmi?",
				a: "Yo'q. Forma so'rov yig'adi va WhatsApp, pochta yoki qo'ng'iroqni ochadi. Xona administrator javob bergach saqlanadi."
			},
			{
				q: "Nonushta kiradimi?",
				a: "Mehmonlar uni maqtashadi. Aniq tarifga kirishi-kirmasligini so'rovda yozing — qabulxona aniq aytadi."
			},
			{
				q: "Kechki reys bilan bo'ladimi?",
				a: "Qabulxona tunu kun ishlaydi. Qo'nish vaqtini izohga yozing."
			},
			{
				q: "Qanday bekor qilinadi?",
				a: "Bekor qilish shartini mehmonxona tasdiqlashda aytadi. Agregator qoidalarini va'da qilmaymiz."
			},
			{
				q: "Qaysi tillarda javob berishadi?",
				a: "Sayt o'zbek, rus va ingliz tillarida. Qabulxonada kutib olishadi; kerakli tilni so'rovda yozing."
			}
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
		copied: "Havola nusxalandi"
	},
	en: {
		nav: {
			stay: "House",
			rooms: "Rooms",
			gallery: "Frames",
			reviews: "Reviews",
			place: "Place",
			book: "Request"
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
			{
				k: "Rooms",
				v: "16"
			},
			{
				k: "Opened",
				v: "Feb 2026"
			},
			{
				k: "Check-in",
				v: "14:00"
			},
			{
				k: "Check-out",
				v: "12:00"
			},
			{
				k: "Desk",
				v: "24 hours"
			}
		],
		ribbon: [
			"polite staff",
			"new rooms",
			"very clean",
			"breakfast",
			"quiet quarter",
			"spacious bath"
		],
		storyEyebrow: "01 — the house",
		storyTitle: "Ninety is not a floor. It is a pause.",
		storyBody: [
			"NINETY is at 23A Zanjirbog passage: Yakkasaray, trees, embassies, and a short walk to the Museum of Applied Arts.",
			"Sixteen rooms, three floors, a desk that never closes. Free Wi‑Fi, parking at the house, smoking outside only. Visa, Mastercard, contactless and cash.",
			"A direct request is often calmer than an aggregator: we confirm the dates and the figure ourselves, by phone or WhatsApp."
		],
		modelEyebrow: "02 — volume",
		modelTitle: "Turn the house.",
		modelBody: "Not a floor plan — a small plaster model. Drag to walk around it. The windows warm on their own.",
		modelHint: "Drag",
		roomsEyebrow: "03 — rooms",
		roomsTitle: "Three ways to stay.",
		roomsNote: "Rates are a guide per night for two, from public prices in early November (from 650,000 UZS). The hotel confirms the final figure.",
		guestsWord: "guests",
		choose: "Choose",
		amenity: [
			"Wi‑Fi",
			"air conditioning",
			"shower",
			"television",
			"kettle",
			"safe"
		],
		rooms: [
			{
				id: "room",
				name: "Room",
				blurb: "A compact quiet room: linen, warm light, enough for one or two nights.",
				price: roomsBase.room,
				sleeps: 2
			},
			{
				id: "deluxe",
				name: "Deluxe",
				blurb: "A little more air in the same new house. Easy if you want to linger.",
				price: roomsBase.deluxe,
				sleeps: 2
			},
			{
				id: "suite",
				name: "Suite",
				blurb: "A corner with a place to sit by the window. For three, or a longer stay.",
				price: roomsBase.suite,
				sleeps: 3
			}
		],
		galleryEyebrow: "04 — frames",
		galleryTitle: "Light, plaster, table.",
		galleryNote: "These frames suggest the mood of the house. Guest photos live on Google Maps, beside the reviews.",
		filters: [
			{
				id: "all",
				label: "All"
			},
			{
				id: "house",
				label: "House"
			},
			{
				id: "rooms",
				label: "Rooms"
			},
			{
				id: "table",
				label: "Table"
			}
		],
		shots: [
			{
				key: "dusk",
				caption: "Blue hour on the passage"
			},
			{
				key: "day",
				caption: "Daylight facade"
			},
			{
				key: "lobby",
				caption: "Desk and olive"
			},
			{
				key: "room",
				caption: "Linen and lamp"
			},
			{
				key: "suite",
				caption: "Corner by the window"
			},
			{
				key: "bath",
				caption: "Stone and steam"
			},
			{
				key: "breakfast",
				caption: "Morning table"
			}
		],
		seeGoogle: "Open the map",
		reviewsEyebrow: "05 — guests",
		reviewsTitle: "4.9 — and almost all of it is about people.",
		reviews: [
			{
				name: "Nikita Antonov",
				meta: "Google · 5",
				stars: 5,
				text: "An excellent hotel. Polite staff and fine service. They returned a forgotten item and sent it to another country."
			},
			{
				name: "Otabek Bozorov",
				meta: "Google · 5",
				stars: 5,
				text: "New, very clean and modern. Cozy rooms. Breakfast was tasty and varied. The kindness stood out."
			},
			{
				name: "Pavel Ryskalenko",
				meta: "Google · 5",
				stars: 5,
				text: "A fresh hotel with a modern interior. A quiet, safe district of embassies, and an easy location."
			},
			{
				name: "Nicky Chung",
				meta: "Google · 5",
				stars: 5,
				text: "After Tashkent, Samarkand, Bukhara, Khiva and Nukus, this hotel was the favorite part of the trip. Clean, a spacious bath, attentive hosts."
			},
			{
				name: "Ivan Sokolov",
				meta: "Google · 5",
				stars: 5,
				text: "Excellent value. A new, clean hotel with friendly staff."
			},
			{
				name: "Juls",
				meta: "Google · 5",
				stars: 5,
				text: "An issue was fixed the next morning. Excellent work from the desk and the manager, and extremely clean rooms."
			}
		],
		placeEyebrow: "06 — place",
		placeTitle: "Yakkasaray, not the avenue.",
		placeBody: "23A Zanjirbog passage. A quiet district, about five kilometres from Islam Karimov Airport, a short walk from the Museum of Applied Arts.",
		addressLabel: "Address",
		address: "23A Zanjirbog passage, Yakkasaray, Tashkent 100032",
		hours: "Desk 24 hours · check-in 14:00 · check-out 12:00",
		map: "Directions",
		nearTitle: "Nearby",
		near: [
			{
				name: "Museum of Applied Arts",
				dist: "0.7 km"
			},
			{
				name: "Seattle Peace Park",
				dist: "1.2 km"
			},
			{
				name: "NEXT Mall",
				dist: "1.4 km"
			},
			{
				name: "Ice City",
				dist: "1.4 km"
			},
			{
				name: "TAS airport",
				dist: "4.6 km"
			}
		],
		payTitle: "How guests pay",
		pay: [
			"Visa",
			"Mastercard",
			"contactless",
			"cash",
			"free Wi‑Fi",
			"parking at the house"
		],
		faqEyebrow: "Questions",
		faqTitle: "Short, before the call.",
		faq: [
			{
				q: "Is this a confirmed booking?",
				a: "No. The form builds a request and opens WhatsApp, email or a call. The room is held when the desk replies."
			},
			{
				q: "Is breakfast included?",
				a: "Guests praise it. Whether it sits inside a given rate — write it in the request and the desk will say exactly."
			},
			{
				q: "Late flight?",
				a: "The desk is open all night. Put your landing time in the note."
			},
			{
				q: "How do cancellations work?",
				a: "The hotel names the terms when it confirms. We do not promise aggregator rules — a direct request has its own."
			},
			{
				q: "Which languages?",
				a: "The site is in Uzbek, Russian and English. The desk will meet you; if you need a specific language, say so in the request."
			}
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
		copied: "Link copied"
	}
};
var PHONE = "+998700829090";
var PHONE_PRETTY = "+998 70 082 90 90";
var EMAIL = "ninetyboutiquehotel@gmail.com";
var MAPS = "https://www.google.com/maps/search/?api=1&query=41.29704,69.26071";
var OSM = "https://www.openstreetmap.org/export/embed.html?bbox=69.2525%2C41.2938%2C69.2689%2C41.3003&layer=mapnik&marker=41.29704%2C69.26071";
var GALLERY = [
	{
		key: "dusk",
		src: "/media/dusk.jpg",
		cat: "house"
	},
	{
		key: "day",
		src: "/media/day.jpg",
		cat: "house"
	},
	{
		key: "lobby",
		src: "/media/lobby.jpg",
		cat: "house"
	},
	{
		key: "room",
		src: "/media/room.jpg",
		cat: "rooms"
	},
	{
		key: "suite",
		src: "/media/suite.jpg",
		cat: "rooms"
	},
	{
		key: "bath",
		src: "/media/bath.jpg",
		cat: "rooms"
	},
	{
		key: "breakfast",
		src: "/media/breakfast.jpg",
		cat: "table"
	}
];
function money(value, lang) {
	const locale = lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : "en-US";
	return `${new Intl.NumberFormat(locale).format(value)} UZS`;
}
function nightCount(checkIn, checkOut) {
	if (!checkIn || !checkOut) return 0;
	const start = /* @__PURE__ */ new Date(`${checkIn}T00:00:00`);
	const end = /* @__PURE__ */ new Date(`${checkOut}T00:00:00`);
	const diff = Math.round((end.getTime() - start.getTime()) / 864e5);
	return diff > 0 ? diff : 0;
}
var ctx = null;
var master = null;
var ambient = null;
var enabled = false;
function context() {
	if (!ctx) {
		ctx = new (window.AudioContext || window.webkitAudioContext)();
		master = ctx.createGain();
		master.gain.value = .22;
		master.connect(ctx.destination);
	}
	if (ctx.state === "suspended") ctx.resume();
	return ctx;
}
function tone(freq, when, dur, gain, type = "sine") {
	const audio = context();
	if (!master) return;
	const osc = audio.createOscillator();
	const amp = audio.createGain();
	osc.type = type;
	osc.frequency.value = freq;
	amp.gain.setValueAtTime(1e-4, when);
	amp.gain.exponentialRampToValueAtTime(gain, when + .02);
	amp.gain.exponentialRampToValueAtTime(1e-4, when + dur);
	osc.connect(amp);
	amp.connect(master);
	osc.start(when);
	osc.stop(when + dur + .02);
}
function noise(when, dur, gain) {
	const audio = context();
	if (!master) return;
	const length = Math.floor(audio.sampleRate * dur);
	const buffer = audio.createBuffer(1, length, audio.sampleRate);
	const data = buffer.getChannelData(0);
	for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length);
	const src = audio.createBufferSource();
	src.buffer = buffer;
	const filter = audio.createBiquadFilter();
	filter.type = "highpass";
	filter.frequency.value = 1200;
	const amp = audio.createGain();
	amp.gain.value = gain;
	src.connect(filter);
	filter.connect(amp);
	amp.connect(master);
	src.start(when);
}
function setSoundEnabled(on) {
	enabled = on;
	if (!on) {
		ambient?.stop();
		ambient = null;
		return;
	}
	context();
}
function play(cue) {
	if (!enabled) return;
	const t = context().currentTime;
	if (cue === "tap") {
		noise(t, .05, .08);
		tone(740, t, .07, .05, "triangle");
	} else if (cue === "soft") tone(220, t, .12, .04, "sine");
	else if (cue === "lang") {
		tone(523.25, t, .16, .06);
		tone(659.25, t + .09, .2, .05);
	} else if (cue === "open") {
		tone(392, t, .22, .04);
		tone(587.33, t + .06, .28, .035);
	} else {
		tone(392, t, .28, .07);
		tone(493.88, t + .08, .32, .06);
		tone(587.33, t + .16, .46, .05);
	}
}
function setAmbient(on) {
	if (!on || !enabled) {
		ambient?.stop();
		ambient = null;
		return;
	}
	if (ambient) return;
	const audio = context();
	if (!master) return;
	const bed = audio.createGain();
	bed.gain.value = .045;
	bed.connect(master);
	const oscA = audio.createOscillator();
	const oscB = audio.createOscillator();
	oscA.type = "sine";
	oscB.type = "sine";
	oscA.frequency.value = 110;
	oscB.frequency.value = 164.81;
	const filter = audio.createBiquadFilter();
	filter.type = "lowpass";
	filter.frequency.value = 420;
	oscA.connect(filter);
	oscB.connect(filter);
	filter.connect(bed);
	oscA.start();
	oscB.start();
	const scale = [
		329.63,
		392,
		440,
		493.88,
		587.33
	];
	let timer = 0;
	const tick = () => {
		if (!ambient) return;
		const now = audio.currentTime;
		tone(scale[Math.floor(Math.random() * scale.length)] ?? 440, now, 1.4, .018);
		timer = window.setTimeout(tick, 1800 + Math.random() * 2600);
	};
	timer = window.setTimeout(tick, 600);
	ambient = { stop: () => {
		window.clearTimeout(timer);
		oscA.stop();
		oscB.stop();
		bed.disconnect();
	} };
}
var LANGS = [
	"uz",
	"ru",
	"en"
];
function isoDate(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function Site() {
	const [lang, setLangState] = (0, import_react.useState)("ru");
	const [sound, setSound] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [frame, setFrame] = (0, import_react.useState)(null);
	const [intent, setIntent] = (0, import_react.useState)("stay");
	const [roomId, setRoomId] = (0, import_react.useState)("room");
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [checkIn, setCheckIn] = (0, import_react.useState)("");
	const [checkOut, setCheckOut] = (0, import_react.useState)("");
	const [guests, setGuests] = (0, import_react.useState)(2);
	const [note, setNote] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [done, setDone] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [today, setToday] = (0, import_react.useState)("");
	const t = copy[lang];
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) document.documentElement.dataset.animate = "1";
		const stored = localStorage.getItem("ninety-lang");
		if (stored === "ru" || stored === "uz" || stored === "en") setLangState(stored);
		const start = /* @__PURE__ */ new Date();
		start.setDate(start.getDate() + 3);
		const end = /* @__PURE__ */ new Date();
		end.setDate(end.getDate() + 4);
		setToday(isoDate(/* @__PURE__ */ new Date()));
		setCheckIn(isoDate(start));
		setCheckOut(isoDate(end));
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang === "uz" ? "uz" : lang;
	}, [lang]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menu || frame !== null ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menu, frame]);
	(0, import_react.useEffect)(() => {
		if (frame === null) return;
		const onKey = (event) => {
			if (event.key === "Escape") setFrame(null);
			if (event.key === "ArrowRight") setFrame((i) => i === null ? i : (i + 1) % shots.length);
			if (event.key === "ArrowLeft") setFrame((i) => i === null ? i : (i - 1 + shots.length) % shots.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [frame]);
	const shots = (0, import_react.useMemo)(() => {
		return (filter === "all" ? GALLERY : GALLERY.filter((shot) => shot.cat === filter)).map((shot) => ({
			...shot,
			caption: t.shots.find((item) => item.key === shot.key)?.caption ?? shot.key
		}));
	}, [filter, t.shots]);
	const room = t.rooms.find((item) => item.id === roomId) ?? t.rooms[0];
	const nights = nightCount(checkIn, checkOut);
	const estimate = intent === "stay" && room && nights ? room.price * nights : 0;
	function setLang(next) {
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
	function go(id) {
		setMenu(false);
		if (sound) play("tap");
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	function chooseRoom(id) {
		setRoomId(id);
		setIntent("stay");
		if (sound) play("tap");
	}
	function submit(event) {
		event.preventDefault();
		const next = {};
		if (name.trim().length < 2) next.name = t.errName;
		if (phone.replace(/\D/g, "").length < 7) next.phone = t.errPhone;
		if (intent === "stay") {
			if (!roomId) next.room = t.errRoom;
			if (nightCount(checkIn, checkOut) < 1) next.dates = t.errDates;
		}
		setErrors(next);
		if (Object.keys(next).length) return;
		const message = [
			"NINETY boutique hotel",
			`${t.name}: ${name.trim()}`,
			`${t.phone}: ${phone.trim()}`,
			email.trim() ? `${t.email}: ${email.trim()}` : "",
			intent === "stay" ? `${t.checkIn}: ${checkIn}` : t.question,
			intent === "stay" ? `${t.checkOut}: ${checkOut} (${nights} ${t.nights})` : "",
			intent === "stay" ? `${t.guests}: ${guests}` : "",
			intent === "stay" && room ? `${t.room}: ${room.name}` : "",
			estimate ? `${t.estimate}: ${money(estimate, lang)}` : "",
			note.trim() ? `${t.note}: ${note.trim()}` : ""
		].filter(Boolean).join("\n");
		const payload = {
			at: (/* @__PURE__ */ new Date()).toISOString(),
			message
		};
		const prev = localStorage.getItem("ninety-requests");
		let list = [];
		try {
			list = prev ? JSON.parse(prev) : [];
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
		const data = {
			title: "NINETY boutique hotel",
			text: t.title,
			url: window.location.href
		};
		if (sound) play("soft");
		if (navigator.share) try {
			await navigator.share(data);
			return;
		} catch {}
		await navigator.clipboard.writeText(window.location.href);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	}
	const wa = done ? `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(done)}` : "";
	const mail = done ? `mailto:${EMAIL}?subject=${encodeURIComponent("NINETY")}&body=${encodeURIComponent(done)}` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
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
						addressCountry: "UZ"
					},
					geo: {
						"@type": "GeoCoordinates",
						latitude: 41.29704,
						longitude: 69.26071
					},
					aggregateRating: {
						"@type": "AggregateRating",
						ratingValue: "4.9",
						reviewCount: "17"
					},
					checkinTime: "14:00",
					checkoutTime: "12:00",
					numberOfRooms: 16
				}) }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-5 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#top",
							className: "font-serif text-2xl leading-none tracking-tight",
							onClick: () => sound && play("tap"),
							children: "NINETY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ml-6 hidden items-center gap-5 text-sm md:flex",
							children: [
								["stay", "stay"],
								["rooms", "rooms"],
								["gallery", "gallery"],
								["reviews", "reviews"],
								["place", "place"]
							].map(([id, key]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "press text-stone hover:text-ink",
								onClick: () => go(id),
								children: t.nav[key]
							}, id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 text-xs tracking-widest uppercase",
									children: LANGS.map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: `press min-h-11 min-w-9 px-1 ${lang === code ? "text-ink" : "text-stone"}`,
										onClick: () => setLang(code),
										"aria-pressed": lang === code,
										children: code
									}, code))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press grid size-11 place-items-center border border-line",
									onClick: toggleSound,
									"aria-pressed": sound,
									"aria-label": sound ? t.soundOn : t.soundOff,
									children: sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${PHONE}`,
									className: "press hidden h-11 items-center gap-2 border border-ink px-3 text-sm sm:inline-flex",
									onClick: () => sound && play("tap"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), PHONE_PRETTY]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "press grid size-11 place-items-center border border-ink md:hidden",
									onClick: () => setMenu(true),
									"aria-label": t.menu,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
								})
							]
						})
					]
				})
			}),
			menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex flex-col bg-paper px-6 py-5 md:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-2xl",
							children: "NINETY"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press grid size-11 place-items-center border border-line",
							onClick: () => setMenu(false),
							"aria-label": t.close,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-10 flex flex-col gap-2",
						children: [
							["stay", t.nav.stay],
							["rooms", t.nav.rooms],
							["gallery", t.nav.gallery],
							["reviews", t.nav.reviews],
							["place", t.nav.place],
							["book", t.nav.book]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press py-3 text-left font-serif text-4xl",
							onClick: () => go(id),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE}`,
						className: "mt-auto inline-flex min-h-12 items-center gap-2 text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), PHONE_PRETTY]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-end gap-8 px-5 py-8 lg:grid-cols-12 lg:py-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise text-xs tracking-widest text-stone uppercase",
									children: t.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "hero-title rise d1 mt-4",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise d2 mt-6 max-w-md text-lg text-stone",
									children: t.lead
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rise d3 mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "press inline-flex min-h-12 items-center bg-clay px-5 text-paper",
										onClick: () => go("book"),
										children: t.book
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${PHONE}`,
										className: "press inline-flex min-h-12 items-center border border-ink px-5",
										children: t.call
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "rise d4 mt-6 flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-clay text-clay" }), t.rating]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "side-rail absolute top-4 -left-2 hidden text-xs text-stone xl:block",
									children: "NINETY · TASHKENT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden bg-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
										className: "aspect-video w-full object-cover",
										autoPlay: true,
										muted: true,
										loop: true,
										playsInline: true,
										poster: "/media/dusk.jpg",
										preload: "metadata",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
											src: "/media/arrive.mp4",
											type: "video/mp4"
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-stone",
									children: [
										t.from,
										" ",
										money(65e4, lang),
										" ",
										t.perNight
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "border-y border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-5",
							children: t.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-line px-5 py-5 sm:border-r sm:last:border-r-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-stone uppercase",
									children: fact.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-serif text-3xl",
									children: fact.v
								})]
							}, fact.k))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden border-b border-line py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "marquee-track text-sm tracking-widest uppercase",
							children: [...t.ribbon, ...t.ribbon].map((word, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-stone",
								children: [word, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-6 text-clay",
									children: "/"
								})]
							}, `${word}-${index}`))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "stay",
						className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-stone uppercase",
								children: t.storyEyebrow
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-title",
								children: t.storyTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid gap-5 text-lg md:grid-cols-3",
								children: t.storyBody.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-stone",
									children: paragraph
								}, paragraph.slice(0, 24)))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-sand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2 lg:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-80 bg-paper lg:h-[28rem]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maquette, {})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-stone uppercase",
									children: t.modelEyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title mt-3",
									children: t.modelTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-lg text-stone",
									children: t.modelBody
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-xs tracking-widest text-clay uppercase",
									children: t.modelHint
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "rooms",
						className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-stone uppercase",
								children: t.roomsEyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-end justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title max-w-xl",
									children: t.roomsTitle
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm text-sm text-stone",
									children: t.roomsNote
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid gap-4 lg:grid-cols-3",
								children: t.rooms.map((item, index) => {
									const active = item.id === roomId;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => chooseRoom(item.id),
										className: `press flex min-h-64 flex-col border p-5 text-left ${active ? "border-clay bg-sand" : "border-line bg-paper"}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs tracking-widest text-stone uppercase",
												children: ["0", index + 1]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-6 font-serif text-4xl",
												children: item.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-3 flex-1 text-stone",
												children: item.blurb
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "mt-6 text-sm",
												children: [
													t.from,
													" ",
													money(item.price, lang),
													" · ",
													item.sleeps,
													" ",
													t.guestsWord
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-4 text-xs tracking-widest text-clay uppercase",
												children: t.choose
											})
										]
									}, item.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-stone",
								children: t.amenity.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "gallery",
						className: "bg-ink text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-sand uppercase",
									children: t.galleryEyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap items-end justify-between gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "section-title max-w-xl",
										children: t.galleryTitle
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: t.filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: `press min-h-11 border px-3 text-sm ${filter === item.id ? "border-clay bg-clay text-paper" : "border-sand/40 text-sand"}`,
											onClick: () => {
												setFilter(item.id);
												if (sound) play("soft");
											},
											children: item.label
										}, item.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xl text-sm text-sand",
									children: t.galleryNote
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3",
									children: shots.map((shot, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "press mb-4 block w-full break-inside-avoid text-left",
										onClick: () => {
											setFrame(index);
											if (sound) play("open");
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: shot.src,
											alt: shot.caption,
											loading: "lazy",
											className: "w-full"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block text-sm text-sand",
											children: shot.caption
										})]
									}, shot.key))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: MAPS,
									className: "mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-sand",
									target: "_blank",
									rel: "noreferrer",
									children: [t.seeGoogle, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "reviews",
						className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-stone uppercase",
								children: t.reviewsEyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-title mt-3 max-w-3xl",
								children: t.reviewsTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex snap-x gap-4 overflow-x-auto pb-4",
								children: t.reviews.map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "w-80 shrink-0 snap-start border border-line p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-1 text-clay",
											children: Array.from({ length: review.stars }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-clay" }, index))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-lg",
											children: review.text
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 font-serif text-xl",
											children: review.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-stone",
											children: review.meta
										})
									]
								}, review.name))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "place",
						className: "bg-sand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2 lg:py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-stone uppercase",
									children: t.placeEyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "section-title mt-3",
									children: t.placeTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-lg text-stone",
									children: t.placeBody
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-widest text-stone uppercase",
											children: t.addressLabel
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg",
											children: t.address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-stone",
											children: t.hours
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: MAPS,
										target: "_blank",
										rel: "noreferrer",
										className: "press inline-flex min-h-12 items-center gap-2 bg-ink px-4 text-paper",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), t.map]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${EMAIL}`,
										className: "press inline-flex min-h-12 items-center gap-2 border border-ink px-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }), EMAIL]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-10 font-serif text-2xl",
									children: t.nearTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 divide-y divide-line border-y border-line",
									children: t.near.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center justify-between py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-stone tabular-nums",
											children: item.dist
										})]
									}, item.name))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-serif text-2xl",
									children: t.payTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-wrap gap-2",
									children: t.pay.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border border-line bg-paper px-3 py-2 text-sm",
										children: item
									}, item))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "min-h-80 overflow-hidden border border-line bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: "NINETY map",
									src: OSM,
									className: "h-full min-h-80 w-full border-0",
									loading: "lazy"
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-stone uppercase",
								children: t.faqEyebrow
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "section-title mt-3 max-w-xl",
								children: t.faqTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 border-t border-line",
								children: t.faq.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "border-b border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
										className: "flex min-h-14 cursor-pointer items-center justify-between gap-4 py-4 text-lg",
										children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-clay",
											"aria-hidden": true,
											children: "+"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-2xl pb-5 text-stone",
										children: item.a
									})]
								}, item.q))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "book",
						className: "border-t border-line bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-stone uppercase",
										children: t.formEyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "section-title mt-3",
										children: t.formTitle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-lg text-stone",
										children: t.formLead
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 max-w-sm text-sm text-stone",
										children: t.direct
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/media/lobby.jpg",
										alt: "",
										loading: "lazy",
										className: "mt-8 hidden w-full lg:block"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-7",
								children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-clay bg-sand p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-serif text-4xl",
											children: t.doneTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-stone",
											children: t.doneBody
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
											className: "mt-6 overflow-x-auto text-sm whitespace-pre-wrap",
											children: done
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 flex flex-wrap gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: wa,
													target: "_blank",
													rel: "noreferrer",
													className: "press inline-flex min-h-12 items-center bg-clay px-5 text-paper",
													onClick: () => sound && play("open"),
													children: t.whatsapp
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: mail,
													className: "press inline-flex min-h-12 items-center border border-ink px-5",
													children: t.emailBtn
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `tel:${PHONE}`,
													className: "press inline-flex min-h-12 items-center border border-ink px-5",
													children: t.call
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm text-stone",
											children: t.saved
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "press mt-4 text-sm underline",
											onClick: () => {
												setDone(null);
												if (sound) play("soft");
											},
											children: t.again
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: submit,
									className: "grid gap-4",
									noValidate: true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: `press min-h-12 border ${intent === "stay" ? "border-clay bg-clay text-paper" : "border-line"}`,
												onClick: () => {
													setIntent("stay");
													if (sound) play("soft");
												},
												children: t.stay
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: `press min-h-12 border ${intent === "question" ? "border-clay bg-clay text-paper" : "border-line"}`,
												onClick: () => {
													setIntent("question");
													if (sound) play("soft");
												},
												children: t.question
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "grid gap-1 text-sm",
											children: [
												t.name,
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field",
													value: name,
													onChange: (event) => setName(event.target.value),
													autoComplete: "name"
												}),
												errors.name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-clay",
													children: errors.name
												}) : null
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-4 sm:grid-cols-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "grid gap-1 text-sm",
												children: [
													t.phone,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														className: "field",
														value: phone,
														onChange: (event) => setPhone(event.target.value),
														autoComplete: "tel",
														inputMode: "tel"
													}),
													errors.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-clay",
														children: errors.phone
													}) : null
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "grid gap-1 text-sm",
												children: [t.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: "field",
													value: email,
													onChange: (event) => setEmail(event.target.value),
													autoComplete: "email",
													inputMode: "email"
												})]
											})]
										}),
										intent === "stay" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-4 sm:grid-cols-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "grid gap-1 text-sm",
														children: [t.checkIn, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															className: "field",
															type: "date",
															min: today || void 0,
															value: checkIn,
															onChange: (event) => setCheckIn(event.target.value)
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "grid gap-1 text-sm",
														children: [t.checkOut, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															className: "field",
															type: "date",
															min: checkIn || today || void 0,
															value: checkOut,
															onChange: (event) => setCheckOut(event.target.value)
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "grid gap-1 text-sm",
														children: [t.guests, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
															className: "field",
															value: guests,
															onChange: (event) => setGuests(Number(event.target.value)),
															children: [
																1,
																2,
																3,
																4
															].map((count) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: count,
																children: count
															}, count))
														})]
													})
												]
											}),
											errors.dates ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-clay",
												children: errors.dates
											}) : null,
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
												className: "grid gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
													className: "text-sm",
													children: t.room
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid gap-2 sm:grid-cols-3",
													children: t.rooms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: `press flex min-h-16 cursor-pointer items-center border px-3 ${roomId === item.id ? "border-clay bg-sand" : "border-line"}`,
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "radio",
															name: "room",
															className: "sr-only",
															checked: roomId === item.id,
															onChange: () => chooseRoom(item.id)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block",
															children: item.name
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-sm text-stone tabular-nums",
															children: money(item.price, lang)
														})] })]
													}, item.id))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "border border-line p-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs tracking-widest text-stone uppercase",
														children: t.estimate
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "display-num mt-2 font-serif text-4xl tabular-nums",
														children: estimate ? money(estimate, lang) : "—"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "mt-2 text-sm text-stone",
														children: [
															nights || 0,
															" ",
															t.nights,
															" · ",
															t.confirm
														]
													}),
													room && guests > room.sleeps ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm text-clay",
														children: t.crowd
													}) : null
												]
											})
										] }) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "grid gap-1 text-sm",
											children: [t.note, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												className: "field min-h-28",
												value: note,
												onChange: (event) => setNote(event.target.value),
												placeholder: t.notePh
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "press min-h-12 bg-ink px-5 text-paper",
											children: t.send
										})
									]
								})
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-ink px-5 py-10 pb-28 text-paper md:pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-5xl",
							children: "NINETY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sand",
							children: t.footerNote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sand",
							children: t.address
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE}`,
								className: "min-h-11",
								children: PHONE_PRETTY
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								className: "min-h-11",
								children: EMAIL
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "press min-h-11 text-sand",
								onClick: () => void share(),
								children: copied ? t.copied : t.share
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-line bg-ink px-4 py-3 text-paper md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-sand uppercase",
					children: t.from
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "tabular-nums",
					children: money(65e4, lang)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "press min-h-12 bg-clay px-4 text-paper",
					onClick: () => go("book"),
					children: t.book
				})]
			}),
			frame !== null && shots[frame] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4",
				role: "dialog",
				"aria-modal": "true",
				"aria-label": shots[frame].caption,
				onClick: () => setFrame(null),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press absolute top-4 right-4 grid size-11 place-items-center border border-sand text-paper",
						"aria-label": t.close,
						onClick: () => setFrame(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press absolute top-1/2 left-3 hidden size-11 -translate-y-1/2 place-items-center border border-sand text-paper sm:grid",
						onClick: (event) => {
							event.stopPropagation();
							setFrame((index) => index === null ? index : (index - 1 + shots.length) % shots.length);
							if (sound) play("soft");
						},
						"aria-label": "prev",
						children: "‹"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						onClick: (event) => event.stopPropagation(),
						className: "max-w-5xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: shots[frame].src,
							alt: shots[frame].caption,
							className: "max-h-[78vh] w-full object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "mt-3 text-center text-sand",
							children: shots[frame].caption
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press absolute top-1/2 right-3 hidden size-11 -translate-y-1/2 place-items-center border border-sand text-paper sm:grid",
						onClick: (event) => {
							event.stopPropagation();
							setFrame((index) => index === null ? index : (index + 1) % shots.length);
							if (sound) play("soft");
						},
						"aria-label": "next",
						children: "›"
					})
				]
			}) : null
		]
	});
}
var SplitComponent = Site;
//#endregion
export { SplitComponent as component };
