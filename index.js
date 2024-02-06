const BODY_FIXED_CLASSNAME = "body-fixed";
const BODY_FIXED_CLASSNAME_2 = "body-fixed";
const BURGER_OPENED_CLASSNAME = "menu-burger-open";
const BURGER_BTN_OPENED_CLASSNAME = "btn-menu-burger-open";
const POPUP_OPENED_CLASSNAME = "popup-order-open";
const ACTIVE_SLIDE_CLASSNAME = "gallery-slide-active";

const bodyNode = document.querySelector("body");
const bodyNode2 = document.querySelector("body");
const popupNode = document.querySelector(".js-popup");
const btnOpenNode = document.querySelector(".js-btn-order");
const popupContentNode = document.querySelector(".js-popup-order-content");
const btnCloseNode = document.querySelector(".js-btn-order-close");

const slidesNodes = Array.from(document.querySelectorAll(".gallery-slide"));
const prevButtonNode = document.querySelector(".gallery-control-left");
const nextButtonNode = document.querySelector(".gallery-control-right");
const burgerNode = document.querySelector(".js-menu-burger");
const burgerBtnNode = document.querySelector(".js-btn-menu-burger");
const burgerContentNode = document.querySelector(".js-menu-burger-content");

let activeId;

// for test only | remove in production
console.log(slidesNodes);

// order modal logoc
function togglePopup() {
    popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}

// burger-menu logic
function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME_2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}

// slider logic functions
function setActiveSlideById(id) {
    const currentId = activeId;
    activeId = id;

    slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME);
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME);
}

function getPrevId() {
    return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
    return activeId === slidesNodes.length - 1 ? 0 : activeId + 1;
}

function sliding() {
    activeId = 0;

    prevButtonNode.addEventListener("click", () => {
        setActiveSlideById(getPrevId());
    });

    nextButtonNode.addEventListener("click", () => {
        setActiveSlideById(getNextId());
    });
}

// event listeners
btnOpenNode.addEventListener("click", togglePopup);
btnCloseNode.addEventListener("click", togglePopup);
popupNode.addEventListener("click", (event) => {
    const isClickOutsideContent = !event
        .composedPath()
        .includes(popupContentNode);

    if (isClickOutsideContent) {
        togglePopup();
    }
});
burgerBtnNode.addEventListener("click", toggleBurger);
burgerNode.addEventListener("click", (event) => {
    const isClickOutsideContent = !event
        .composedPath()
        .includes(burgerContentNode);

    if (isClickOutsideContent) {
        toggleBurger();
    }
});

// slider call
sliding();
