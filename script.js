const adulteQauntityTotal = document.getElementById("adulteQauntity");
const enfanteQauntityTotal = document.getElementById("enfanteQauntity");
const jHourQauntityTotal = document.getElementById("jHourTotoal");
const passInput = document.getElementById("passInput");

let adulteQauntity = 0;
let enfanteQauntity = 0;
let jHourQauntity = 0;

const handeAdulteQuantityPlus = () => {
  adulteQauntity++;
  adulteQauntityTotal.innerHTML = adulteQauntity;
};

const handeAdulteQuantityMinus = () => {
  if (adulteQauntity === 0) {
    return;
  }
  adulteQauntity--;
  adulteQauntityTotal.innerHTML = adulteQauntity;
};

const handeEnfanteQauntityPlus = () => {
  enfanteQauntity++;
  enfanteQauntityTotal.innerHTML = enfanteQauntity;
};

const handeEnfanteQauntityMinus = () => {
  if (enfanteQauntity === 0) {
    return;
  }
  enfanteQauntity--;
  enfanteQauntityTotal.innerHTML = enfanteQauntity;
};

const handleJhourAdd = () => {
  jHourQauntity++;
  jHourQauntityTotal.innerHTML = jHourQauntity;
};

const handleJhourMinus = () => {
  if (jHourQauntity === 0) {
    return;
  }
  jHourQauntity--;
  jHourQauntityTotal.innerHTML = jHourQauntity;
};


// Handle pass Select
const handleSlelectPass = (option) => {
  passInput.value = option;
};

