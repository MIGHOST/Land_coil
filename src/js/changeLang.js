const language = {
  ru: {
    introTitle: `ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ
        «ЕДИНЫЕ ТОПЛИВНЫЕ СИСТЕМЫ УКРАИНЫ»`,
    introSubtitleText: `ООО «ЕДИНЫЕ ТОПЛИВНЫЕ СИСТЕМЫ УКРАИНЫ»`,
    introSubtitle: `Компания специализируется на поставках высококачественного твердого топлива для населения, производственных предприятий
        частной, государственной и коммунальной форм собственности.`,
    introSubtitle2: `Кроме того, наша цель заключается в запуске единой платформы для бизнеса, где каждый сможет стать нашим
        партнером на выгодных условиях.`,
    introBottomTxt: `Мы заинтересованы в стабильном и эффективном сотрудничестве для бесперебойного обеспечения всех регионов Украины
        и соседних стран.`,
    activityTitle: 'Продукция',
    activityDescription: `У нас вы можете приобрести, каменный уголь (сортовой и рядовой) марок ДГ, Т, ТМ,
    АО, ДГР, АС, АО, СС, Г(Г2)Р (0-200), ГЖР (0-200) оптом и в розницу. Качество продукции соответствует установленным
    требованиям государственного стандарта и техническим условиям, что подтверждено сертификатами и обусловлено
    многолетним деловым партнерством с ведущими угледобывающими предприятиями Украины.`,
    activityPriceTitle: `Прайс-лист`,
    listItemText:`* Цены по каждому заказу рассматриваются в индивидуальном порядке в зависимости от объема
    заказа, фасовки (мешок, биг-бег) и условий доставки!`,
    sentButton:"Оставить заказ",
    feedbackTittle: "Наши услуги",
    contactsTitle: "Сотрудничество",

  },
};

const mainTitle = document.querySelector(".intro_title");
const introSubTitleMainText = document.querySelector(".intro_subtitle");
const introSubTxt = document.querySelector(".intro_subtitle__text");
const introSubTitleMainText2 = document.querySelector("#intro_text");
const introBottomTxt = document.querySelector(".intro_bottomText");
const activityTitle = document.querySelector(".activity__title");
const activityDescription = document.querySelector(".activity__description");
const activityPriceTitle = document.querySelector(".activity__price-title");
const listItemText = document.querySelector(".list-item__text");
const sentButton = document.querySelector(".sent_button");
const feedbackTittle = document.querySelector(".feedback__tittle");
const contactsTitle = document.querySelector(".contacts-form-sec__title")



  if (window.location.hash) {
    if (window.location.hash === "#ru") {
      mainTitle.textContent = language.ru.introTitle;
      introSubTitleMainText.textContent = language.ru.introSubtitle;
      introSubTitleMainText2.textContent = language.ru.introSubtitle2;
      introBottomTxt.textContent = language.ru.introBottomTxt;
      activityTitle.textContent = language.ru.activityTitle;
      activityDescription.textContent = language.ru.activityDescription;
      activityPriceTitle.textContent = language.ru.activityPriceTitle;
      listItemText.textContent = language.ru.listItemText;
      sentButton.textContent = language.ru.sentButton;
      feedbackTittle.textContent = language.ru.feedbackTittle;
      contactsTitle.textContent = language.ru.contactsTitle;



    }
  }
