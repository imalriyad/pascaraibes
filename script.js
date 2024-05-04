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

// offer section slider 1

const sliderOneImgLinks = [
  "https://i.ibb.co/9NyCDvM/image4.jpg",
  "https://i.ibb.co/KV5fzd6/image3.jpg",
  "https://i.ibb.co/qMq3ZqW/image1.jpg",
  "https://i.ibb.co/y5Z4X0q/image2.jpg",
];

let currentIndex = 0;

function handleLeftButton() {
  currentIndex =
    (currentIndex - 1 + sliderOneImgLinks.length) % sliderOneImgLinks.length;
  updateSlider();
}

function handleRightButton() {
  currentIndex = (currentIndex + 1) % sliderOneImgLinks.length;
  updateSlider();
}

function updateSlider() {
  const leftBoxImage = document.getElementById("leftBoxImage");
  const rightBoxImage = document.getElementById("rightBoxImage");

  // Change only one image based on the direction of the button click
  if (currentIndex % 2 === 0) {
    leftBoxImage.src = sliderOneImgLinks[currentIndex];
  } else {
    rightBoxImage.src = sliderOneImgLinks[currentIndex];
  }
}

// Initial call to update slider with first image
updateSlider();



const sliderTwoImgLinks = [
  "https://i.ibb.co/9NyCDvM/image4.jpg",
  "https://i.ibb.co/KV5fzd6/image3.jpg",
  "https://i.ibb.co/qMq3ZqW/image1.jpg",
  "https://i.ibb.co/y5Z4X0q/image2.jpg",
];

let currentSlide = 0;

function handleLeftButton2() {
  currentSlide =
    (currentSlide - 1 + sliderTwoImgLinks.length) % sliderTwoImgLinks.length;
  updateSlider2(); // Call updateSlider2 instead of updateSlider
}

function handleRightButton2() {
  currentSlide = (currentSlide + 1) % sliderTwoImgLinks.length;
  updateSlider2(); // Call updateSlider2 instead of updateSlider
}

function updateSlider2() {
  const leftBoxImage1 = document.getElementById("leftBoxImage1");
  const rightBoxImage1 = document.getElementById("rightBoxImage1");
  // Change only one image based on the direction of the button click
  if (currentSlide % 2 === 0) {
    leftBoxImage1.src = sliderTwoImgLinks[currentSlide];
  } else {
    rightBoxImage1.src = sliderTwoImgLinks[currentSlide];
  }
}

// Initial call to update slider with first image
updateSlider2();

