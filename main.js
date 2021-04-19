// const myName = "Mirek";
// const age = 37;

// function greet(age, myName) {
//   alert(`Cześć, jestem ${myName}, mam ${age} lat. Zapraszam Cię na moją stronę`);
// }

// greet(age, myName);

const burger = document.querySelector('.burger');

const burgerIcon = document.querySelector('.fa-bars');
const timesIcon = document.querySelector('.fa-times');
const navigation = document.querySelector('.navigation');
const headerBurger = document.querySelector('.header__burger');


burger.addEventListener('click', () => {
 burgerIcon.classList.toggle('active');
 timesIcon.classList.toggle('active');
 navigation.classList.toggle('active');
 headerBurger.classList.toggle('active');
});