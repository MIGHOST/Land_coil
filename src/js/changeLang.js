const language = {
  ru: {
    introTitle: `ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
        «ЕДИНЫЕ ТОПЛИВНЫЕ СИСТЕМЫ УКРАИНЫ»`,
    introSubtitleText: `ООО «ЕДИНЫЕ ТОПЛИВНЫЕ СИСТЕМЫ УКРАИНЫ»`,
    introItem1: `Первая национальная платформа антикризисного объединения всех заинтересованных бизнес-сообществ;`,
    introItem2: `Объединяем малый и средний бизнес энергетической отрасли;`,
    introItem3: `Обеспечим энергоэффективность страны вместе!`,
    introSubtitle: `Компания специализируется на поставках высококачественного твердого топлива для населения, производственных предприятий
        частной, государственной и коммунальной форм собственности.`,
    introSubtitle2: `Кроме того, наша цель заключается в запуске единой платформы для бизнеса, где каждый сможет стать нашим
        партнером на выгодных условиях.`,
    introBottomTxt: `Мы заинтересованы в стабильном и эффективном сотрудничестве для бесперебойного обеспечения всех регионов Украины
        и соседних стран.`,
    activityTitle: 'Продукция',
    activityDescription: `У нас вы можете приобрести, каменный уголь (сортовой и рядовой) марок ДГ, Т, ТМ,
    АО, ДГР, АС, АМ, АО, СС, Г(Г2)Р (0-200), ГЖР (0-200) оптом и в розницу. Качество продукции соответствует установленным
    требованиям государственного стандарта и техническим условиям, что подтверждено сертификатами и обусловлено
    многолетним деловым партнерством с ведущими угледобывающими предприятиями Украины.`,
    activityPriceTitle: `Прайс-лист`,    
    listItemText: `* Цены по каждому заказу рассматриваются в индивидуальном порядке в зависимости от объема
    заказа, фасовки (мешок, биг-бег) и условий доставки!`,
    servicesTittle: "Наши услуги",
    contactsTitle: `Сотрудничество`,
    colaborationText1: ` Приоритетным направлением развития компании является расширение рынка сбыта готовой продукции за счет
    привлечения новых партнеров по реализации твердого топлива.`,
    colaborationText2: `Мы предлагаем выгодные условия предприятиям, организациям и частным лицам, желающим представлять интересы
    ООО «ЕДИНЫЕ ТОПЛИВНЫЕ СИСТЕМЫ УКРАИНЫ» на рынке Украины и за рубежом.`,
    colaborationText3: `Наши специальные дилерские предложения распространяются на весь ассортимент продукции, а также на полный спектр
    работ и услуг.`,
    colaborationText4: `Мы также сотрудничаем на условиях дропшиппинга!`,
    colaborationText5: `Если Вы готовы к сотрудничеству или хотите узнать больше о дилерских и дропшиппинговых предложениях - напишите
    нам письмо через ниже указанную форму и мы обязательно свяжемся с вами.`,
    contactTitle: "Контакты",
    adressTitle: "Адрес:",
    addressItem1:`01042, г. Киев,`,
    addressItem2:`Печерский район,`,
    addressItem3:`переулок Новопечерский,`,
    addressItem4:`дом 19/3`,
    footerRights:`© 2020 ООО "ЕДИНЫЕ ТОПЛИВНЫЕ СИСТЕМЫ УКРАИНЫ".`,
  },
};

const mainTitle = document.querySelector(".intro_title");
const introSubTitleMainText = document.querySelector(".intro_subtitle");
const introItem1 = document.querySelector(".intro_item1");
const introItem2 = document.querySelector(".intro_item2");
const introItem3 = document.querySelector(".intro_item3");
const introSubTxt = document.querySelector(".intro_subtitle__text");
const introSubTitleMainText2 = document.querySelector("#intro_text");
const introBottomTxt = document.querySelector(".intro_bottomText");
const activityTitle = document.querySelector(".activity__title");
const activityDescription = document.querySelector(".activity__description");
const activityPriceTitle = document.querySelector(".price-title");
const listItemText = document.querySelector(".list-item__text");
const servicesTittle = document.querySelector(".services__tittle");
const contactsTitle = document.querySelector(".sec-title__collaboration")
const colaborationText1 = document.querySelector(".colaboration_text1")
const colaborationText2 = document.querySelector(".colaboration_text2")
const colaborationText3 = document.querySelector(".colaboration_text3")
const colaborationText4 = document.querySelector(".colaboration_text4")
const colaborationText5 = document.querySelector(".colaboration_text5")
const contactTitle = document.querySelector(".cont-title");
const adressTitle = document.querySelector(".adress-title");
const addressItem1 = document.querySelector(".address-item1");
const addressItem2 = document.querySelector(".address-item2");
const addressItem3 = document.querySelector(".address-item3");
const addressItem4 = document.querySelector(".address-item4");
const footerRights = document.querySelector(".footer-rights");
const tableUa = document.querySelector("#table_ua");
const tableRu = document.querySelector("#table_ru");
const navMenuUa = document.querySelector("#nav-menu-ua");
const navMenuRu = document.querySelector("#nav-menu-ru");
const navMenuUaTab = document.querySelector("#nav-menu-ua-tab");
const navMenuRuTab = document.querySelector("#nav-menu-ru-tab");
const formCollaborationUa = document.querySelector("#form-collaboration-ua")
const formCollaborationRu = document.querySelector("#form-collaboration-ru")
const serviceUa = document.querySelector("#service-ua");
const serviceRu = document.querySelector("#service-ru");
const orderUa = document.querySelector("#order-from-ua");
const orderRu = document.querySelector("#order-from-ru")

if (window.location.hash) {
  if (window.location.hash === "#ru") {
    mainTitle.textContent = language.ru.introTitle;
    introItem1.textContent = language.ru.introItem1;
    introItem2.textContent = language.ru.introItem2;
    introItem3.textContent = language.ru.introItem3;
    introSubTitleMainText.textContent = language.ru.introSubtitle;
    introSubTitleMainText2.textContent = language.ru.introSubtitle2;
    introBottomTxt.textContent = language.ru.introBottomTxt;
    activityTitle.textContent = language.ru.activityTitle;
    activityDescription.textContent = language.ru.activityDescription;
    activityPriceTitle.textContent = language.ru.activityPriceTitle; 
    listItemText.textContent = language.ru.listItemText;   
    servicesTittle.textContent = language.ru.servicesTittle;
    contactsTitle.textContent = language.ru.contactsTitle;
    colaborationText1.textContent = language.ru.colaborationText1;
    colaborationText2.textContent = language.ru.colaborationText2;
    colaborationText3.textContent = language.ru.colaborationText3;
    colaborationText4.textContent = language.ru.colaborationText4;
    colaborationText5.textContent = language.ru.colaborationText5;
    contactTitle.textContent = language.ru.contactTitle;
    adressTitle.textContent = language.ru.adressTitle;
    addressItem1.textContent = language.ru.addressItem1;
    addressItem2.textContent = language.ru.addressItem2;
    addressItem3.textContent = language.ru.addressItem3;
    addressItem4.textContent = language.ru.addressItem4;
    footerRights.textContent = language.ru.footerRights;
    tableUa.classList.add("js-block");
    tableRu.classList.remove("js-block");
    navMenuUa.classList.add("js-block")
    navMenuRu.classList.remove("js-block");
    navMenuUaTab.classList.add("js-block");
    navMenuRuTab.classList.remove("js-block");
    formCollaborationUa.classList.add("js-block");
    formCollaborationRu.classList.remove("js-block");
    serviceUa.classList.add("js-block");
    serviceRu.classList.remove("js-block");
    orderUa.classList.add("js-block");
    orderRu.classList.remove("js-block");
  }
}
 