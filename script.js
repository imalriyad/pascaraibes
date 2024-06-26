const adulteQauntityTotal = document.getElementById("adulteQauntity");
const adulteQauntityTotal2 = document.getElementById("adulteQauntity2");
const enfanteQauntityTotal = document.getElementById("enfanteQauntity");
const enfanteQauntityTotal2 = document.getElementById("enfanteQauntity2");
const jHourQauntityTotal = document.getElementById("jHourTotoal");
const jHourQauntityTotal2 = document.getElementById("jHourTotoal2");
const passInput = document.getElementById("passInput");
const amountNum = document.getElementById("amountNum");
const totalAmount = document.getElementById("totalAmount");
const cartButton = document.getElementById("cartButton");
const tabSectionDiv = document.getElementById("tabDiv");

let adulteQauntity = 0;
let enfanteQauntity = 0;
let jHourQauntity = 0;

const handeAdulteQuantityPlus = () => {
  adulteQauntity++;
  adulteQauntityTotal.innerHTML = adulteQauntity;
  adulteQauntityTotal2.innerHTML = adulteQauntity;
};

const handeAdulteQuantityMinus = () => {
  if (adulteQauntity === 0) {
    return;
  }
  adulteQauntity--;
  adulteQauntityTotal.innerHTML = adulteQauntity;
  adulteQauntityTotal2.innerHTML = adulteQauntity;
};

const handeEnfanteQauntityPlus = () => {
  enfanteQauntity++;
  enfanteQauntityTotal.innerHTML = enfanteQauntity;
  enfanteQauntityTotal2.innerHTML = enfanteQauntity;
};

const handeEnfanteQauntityMinus = () => {
  if (enfanteQauntity === 0) {
    return;
  }
  enfanteQauntity--;
  enfanteQauntityTotal.innerHTML = enfanteQauntity;
  enfanteQauntityTotal2.innerHTML = enfanteQauntity;
};

const handleJhourAdd = () => {
  jHourQauntity++;
  jHourQauntityTotal.innerHTML = jHourQauntity;
  jHourQauntityTotal2.innerHTML = jHourQauntity;
};

const handleJhourMinus = () => {
  if (jHourQauntity === 0) {
    return;
  }
  jHourQauntity--;
  jHourQauntityTotal.innerHTML = jHourQauntity;
  jHourQauntityTotal2.innerHTML = jHourQauntity;
};

// Handle pass Select
const handleSlelectPass = (option) => {
  passInput.value = option;
};

// handleCart
const handleCart = () => {
  totalAmount.innerHTML = amountNum.value;
  if (jHourQauntity > 0 && adulteQauntity > 0 && enfanteQauntity > 0) {
    cartButton.classList.add("bg-green");
    cartButton.classList.remove("bg-gray");
  }
};

// Handale tab section backgound changes
const handleSkyBlueTab = () => {
  tabSectionDiv.style.backgroundImage = 'url("./img/sky-blue.png")';
};

const handleGreenTab = () => {
  tabSectionDiv.style.backgroundImage = 'url("./img/green-bg.png")';
};
const handlePinkTab = () => {
  tabSectionDiv.style.backgroundImage = 'url("./img/pink-bg.png")';
};

const swiperEl = document.getElementById("swiper-container");
const swiperElTwo = document.getElementById("swiper-containerTwo");

// slider number one
const handlePrev = () => {
  swiperEl.swiper.slidePrev();
  console.log("prev");
};
const handleNext = () => {
  swiperEl.swiper.slideNext();
  console.log("next");
};

// Slider number two
const handlePrevTwo = () => {
  swiperElTwo.swiper.slidePrev();
  console.log("prev");
};
const handleNextTwo = () => {
  swiperElTwo.swiper.slideNext();
  console.log("next");
};

const swiperParams = {
  slidesPerView: 2,
  spaceBetween: -60,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  on: {
    init() {
      // ...
    },
  },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);
Object.assign(swiperElTwo, swiperParams);

// and now initialize it
swiperEl.initialize();
swiperElTwo.initialize();
// For fixing dropdown closing
function stopPropagation(event) {
  event.stopPropagation();
}
