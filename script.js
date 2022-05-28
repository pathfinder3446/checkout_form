let  counter1 = 1;
let  counter2 = 1;
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const value = document.querySelector(".value1");
const valuee = document.querySelector(".value2");

plus[0].addEventListener(`click`, () => {
    plus[0].querySelectorAll(`.plus`);
    value.innerHTML = ++counter1;

});

minus[0].addEventListener(`click`, () => {
    if (value.innerHTML >= 2) {
        minus[0].querySelectorAll(`.minus`);
        value.innerHTML = --counter1;}
    
});

plus[1].addEventListener(`click`, () => {
    plus[1].querySelectorAll(`.plus`);
    valuee.innerHTML = ++counter2;

});

minus[1].addEventListener(`click`, () => {
    if (valuee.innerHTML >= 2) {
        minus[1].querySelectorAll(`.minus`);
        valuee.innerHTML = --counter2;}
    
});

const remove1 = document.querySelector(`#remove1`);
const product1 = document.querySelector(`#product1`);
const remove2 = document.querySelector(`#remove2`);
const product2 = document.querySelector(`#product2`);

remove1.addEventListener(`click`, () => {
    product1.style.display = `none`;
});

remove2.addEventListener(`click`, () => {
    product2.style.display = `none`;
});

