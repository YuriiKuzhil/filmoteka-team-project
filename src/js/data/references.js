// Сюда кидаем ссылки на елементы, которые будем обрабатывать через js, а также селекторы, которые мы будем использовать для поиска елементов, уже после их рендеринга на страницу

export default () => {
  return {
    logo: document.querySelector('.js-logo'),
    navigation: document.querySelector('.js-navigation'),
    homeBtn: document.querySelector('.js-home-btn'),
    myLibraryBtn: document.querySelector('.js-mylibrary-btn'),
    header: document.querySelector('.js-header'),
    headerBottomContainer: document.querySelector('.js-header__bottom'),
    form: document.querySelector('#search-form'),
    input: document.querySelector('[name="query"]'),
    notificationEl: document.querySelector('.js-notification'),
    cardsContainer: document.querySelector('.js-cards__list'),
    loadMoreBtn: document.querySelector('.js-loadmore-btn'),
    loadMoreAnchor: document.querySelector('.js-loadmore-anchor'),
    cardModal: document.querySelector('.js-card-modal'),
    devsLink: document.querySelector('.js-devs-link'),
    devsModal: document.querySelector('.js-devs-modal'),
    devsCloseBtn: document.querySelector('[data-action="close-devs-modal"]'),
    cardsTitle: document.querySelector('.cards__title'),
    cardModalContent: document.querySelector('.js-card-modal-content'),
    // selectors example
    watchedBtnSelector: '.js-watched-btn',
    queueBtnSelector: '.js-queue-btn',
    formSelector: '#search-form',
    libraryBtnsSelector: '.js-library-btns',
    notificationElSelector: '.js-notification',
    devsCloseBtnSelector: '[data-action="close-devs-modal"]',
    modalBtnsListSelector: '.movie-card__btn-list',
    modalBtnSelector: '[data-action="add-to-library"]',
    clossModal: document.querySelector('.devs-modal__button'),
    loaderSpinner: document.querySelector('.loader-spinner'),
    loaderBackdrop: document.querySelector('.js-cards-list__loader'),
    windowLoaderBackdrop: document.querySelector('.js-loader-backdrop'),
    windowSpinner: document.querySelector('.window-spinner'),
    anchorSpinner: document.querySelector('.cards__loadmore-spinner'),
    topScroll: document.querySelector('.js-top-scroll'),
  };
};
