"use strict"


console.log('Практика');
console.log(' ');// просто пробіл
//==========================================================
console.log('DOM');
//========================================================
console.log('Клонування');
console.log(' ');// просто пробіл

let blockMain = document.querySelector('.block__main');// звертаємось до елемента зкласом .block__main
console.log(blockMain);// виводимо отриманий обєкт в консоль

let blockClone = blockMain.cloneNode(true);// клонуємо block__main разом з усім вмістом (true);
console.log(' ');// просто пробіл
console.log(blockClone);// вивід клона в консоль

blockMain.after(blockClone);// вставляемо клон після block__main
let blockRemove = document.querySelector('.block__remove')
blockRemove.remove();// видаляем block__remove
console.log(' ');// просто пробіл
//==========================================================
console.log('робота з класами');
//===========================================================
console.log(' ');// просто пробіл

let newBlock = document.createElement('div');// створюєм новий елемент
blockMain.prepend(newBlock);// вставляєм div в початок block__main
newBlock.className = 'block__title';// записуєм новому елементу класс
newBlock.innerText = "Заголовок";// додаем текст
newBlock.classList.add('title');// додаєм клас title 
blockClone.classList.toggle('active')// даєм клону клас active 
blockClone.style.backgroundColor = 'blue'// додаем клону background-color: blue;

if (blockClone.classList.contains('active')){
  blockClone.style.cssText = `
  background-color: #2df40a;
  `
}else{
  blockClone.style.cssText = `
  background-color: red;
  `
};// перевірка на класс: якщо active є? то фон зелений, ні то фон червоний
console.log(' ');// просто пробіл

let title = document.querySelector('.title');// звернення до заголовку 
console.log(title);
let styleTitle = getComputedStyle(title); // перервірка стилів елемента з класом title 
console.log(styleTitle);
console.log(' ');// просто пробіл
let fontWeightTitle = parseInt(styleTitle.fontWeight);// перервіряєм який font-weight у title 
console.log(fontWeightTitle);
let textAlignTitle = styleTitle.textAlign;// перервіряєм який text-align у title, parseInt не ставлю бо це не числове значення 
console.log(textAlignTitle);
let fontSizeTitle = parseInt(styleTitle.fontSize);// перервіряєм який font-size у title 
console.log(fontSizeTitle);
console.log(' ');// просто пробіл

// ========================================================
console.log('атрибути');
//========================================================
console.log(' ');// просто пробіл
let header = document.querySelector('.header');// звертаємось до класу header 
console.log(header);
console.log(header.tagName);// отримати ім'я тегу з класом header 
// header.setAttribute('data-background-header', 'yellow'); // додаєм хедеру атрибут
header.dataset.backgroundHeader = 'yellow';// додаєм хедеру атрибут
header.hasAttribute('background-header');// перевіряємо наявність доданого атрибуту
console.log(header.hasAttribute('data-background-header'));
let bgColorHeader = header.dataset.backgroundHeader;// отримуєм значення data атрибуту(в даному випадку хедера)
console.log(bgColorHeader);

// blockMain.hidden = true;// аналог display: none; для html
console.log(' ');// просто пробіл

//=======================================================
console.log('Координати та розміри');
//======================================================
console.log(' ');// просто пробіл
console.log("розміри вікна");
console.log(' ');// просто пробіл

// отримуєм розміри вікна браузера з полосами прокрутки:
let windowWidth = window.innerWidth;// ширина в пікселях
console.log(windowWidth,'ширина вікна браузера, ширина в пікселях');
let windowHeight = window.innerHeight;// висота в пікселях
console.log(windowHeight, 'висота вікна браузера, висота в пікселях');
console.log(' ');// просто пробіл

let bodyElement = document.documentElement;// звернення до тега body 
console.log (bodyElement);
let bodyWindowWidth = bodyElement.clientWidth;
console.log(bodyWindowWidth,'ширина вікна браузера з полосою прокрутки, ширина в пікселях');
let bodyWindowHeight = bodyElement.clientHeight;
console.log(bodyWindowHeight,'висота вікна браузера з полосою прокрутки, ширина в пікселях');

console.log(' ');// просто пробіл
console.log('к-cть проскролених пікселів');
console.log(' ');// просто пробіл

let windowScrollTop = window.scrollY;// знайти к-cть проскролених пікселів вниз
let windowScrollLeft = window.scrollX;// знайти к-cть проскролених пікселів вліво
console.log(windowScrollTop, 'к-cть проскролених пікселів вниз');
console.log(windowScrollLeft, 'к-cть проскролених пікселів вліво');
console.log(' ');// просто пробіл

window.scrollBy(0, 50);// скрол відносно потоного положення
console.log(window.scrollY, 'скрол вниз на додаткових 50 пікселів');
console.log(' ');// просто пробіл

// window.scrollTo({
//     top: 200,
//     left: 0,
//     behavior:'smooth',
// });// автоматичний скрол при загрузці або події

let blockText = document.querySelector('.block-text');

// function scrollToBlock(){
//   blockText.scrollIntoView({
//     blockText: "end", // поставиви end воно чомусь вгору переміщується.....
//   });
// };// не зрозуміла штука і принцип роботи
// scrollToBlock();

console.log(' ');// просто пробіл
console.log('позиція');
console.log(' ');// просто пробіл
// обчислення позиції обєктів відбувається відносно першого елемента у якого задано позиціонування (position-не statik). якщо таких нема то відносно body 
console.log(blockClone.offsetTop, 'позиція обєкта від верху');
console.log(blockClone.offsetLeft, 'позиція обїєкта вліво');
console.log(blockClone.offsetParent, 'обєкт відносно якого позиціонується елемент(в данному випадку клон block__main)');
console.log(' ');// просто пробіл

console.log('розміри');
console.log(' ');// просто пробіл
console.log(blockMain.offsetWidth);// загальні розміри елемента - ширина
console.log(blockMain.offsetHeight);// загальні розміри елемента - висота 
console.log(' ');// просто пробіл

console.log(blockClone.getBoundingClientRect());// координати  відносно ВІКНА БРАУЗУРА
console.log(blockClone.getBoundingClientRect().top);// координати по висоті відносно ВІКНА БРАУЗУРА
let block = document.querySelector('.block')
console.log(block);
console.log(' ');// просто пробіл

console.log('отримання обєкта по координатам');
console.log(' ');// просто пробіл

let coordBlock = document.elementFromPoint(100, 100);
console.log(coordBlock, 'отриманий по вказаних координатах обєкт');
console.log(' ');// просто пробіл

//=============================================
console.log('події');
//=============================================
console.log(' ');// просто пробіл

let button = document.querySelector('.button');

// button.onclick = function(){
//   button.style.cssText = `
//   background-color: #2df40a;
//   `
//   console.log('колір кнопки салатовий');
// };


// button.addEventListener ('click', ()=>{
//     button.style.cssText = `
//     // background-color: #2df40a;
//   `
//   console.log('колір кнопки салатовий');
// });// функція щовиконується одразу

// button.removeEventListener ('click', ()=>{
//     button.style.cssText = `
//     background-color: #2df40a;
//   `
//   console.log('колір кнопки салатовий');
// });// відміна події якщо задана одразу через функцію....але відміна не працює, при нажатті на кнопку всерівно міняється колір


button.addEventListener ('click', buttonAction);
function buttonAction(event){
  // button.style.cssText = `
  // background-color: #2df40a;
  // `
  //  console.log('колір кнопки салатовий');// напис не зявляється в консолі хотя колір міняється

};// передача виконання коду (реакція на подію) через фу-ю buttonAction

// button.removeEventListener ('click', buttonAction);// відмінити подію

button.addEventListener ('click', buttonAction);
function buttonAction(event){

  // button.style.cssText = `
  // background-color: #2df40a;
  // `;
  // console.log('колір кнопки салатовий');// напис не зявляється в консолі хотя колір міняється

  // event.preventDefault();// відключає дію за замовченням
};// передача виконання коду (реакція на подію) через фу-ю buttonAction

console.log('подія для кількох елементів');
console.log(' ');// просто пробіл

let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  // console.log(buttons);
  // button.addEventListener ("click", buttonAction);
  // function buttonAction(event){

  // button.style.cssText = `
  // background-color: #2df40a;
  // `
  // event.preventDefault();// відключає дію за замовченням

  // };
  // console.log("колір кнопки салатовий");
  // event.preventDefault();// відключає дію за замовченням

});

console.log('делегування події');
console.log(' ');// просто пробіл

document.addEventListener('click', action);

function action(event){
  if (event.target.closest('.button')){
      button.style.cssText = `
      background-color: #2df40a;
      `
      console.log('button');
      console.log(event);
      console.log(event.pageX);// положення курсора на сторінці в пікселях
      console.log(event.pageY);
  }
  // console.log(targetItem);
};

let blockTitle = document.querySelector('.title');
console.log(blockTitle);
blockMain.addEventListener("mouseenter", mouseAction);
blockMain.addEventListener("mouseleave", mouseAction);
blockMain.addEventListener("mousemove", mouseAction);

function mouseAction (event){
 
  if (event.type === "mouseenter") {
		// При наведенні
    // console.log("mouseenter");
		// console.log(event.pageY);
		// console.log(event.pageX);
	}
  if (event.type === "mouseleave") {
		
		// console.log(event.pageY);
		// console.log(event.pageX);

	}
  if (event.type === "mousemove") {
    // console.log(event.pageY);
		// console.log(event.pageX);
    blockTitle.style.cssText = `
    left: ${event.pageX}px;
      position: relative;
      display: inline-block;
      padding: 0px 80px;
  `;
	}
  event.preventDefault();
}

console.log(' ');// просто пробіл
console.log('подія scroll');

window.addEventListener('scroll', windowScroll);
function windowScroll(event) {
  // console.log(scrollY, 'прокручені вниз пікселі');
}

console.log(' ');// просто пробіл
console.log('завантаження');

window.addEventListener("DOMContentLoaded", domLoaded)

function domLoaded(event) {
  
}

window.addEventListener("load", pageLoaded)

function pageLoaded(event) {
  document.documentElement.classList.add('loaded');
}
//=============================================
console.log('Домашка');
//=============================================
console.log(' ');// просто пробіл
//=============================================
console.log('DOM');
//=============================================
console.log(' ');// просто пробіл
//=============================================
console.log('задача №1');
console.log(' ');// просто пробіл

let dataSay = document.querySelector("[data-say-hi]");// звертаємось до атрибуту
console.log(dataSay); // перевірка занчення в косолі
console.log(dataSay.getAttribute("data-say-hi"));// отримуємо значення атрибуту

console.log(' ');// просто пробіл
console.log('задача №2');
console.log(' ');// просто пробіл

let lists = document.querySelectorAll('li');// звертаємось до усіх li
console.log(lists);// получаєм колекцію
lists.forEach(list => {
  if (list.textContent === "Йончи")// перебтраємо колекцію на наявність значення "Йончи", якщо є то виводим в консоль
   {console.log(list);}
});

console.log(' ');// просто пробіл
console.log('задача №3');
console.log(' ');// просто пробіл

let like = document.querySelectorAll('.like');// получаємо в змінну з колекцією елементів у яких присутній клас like
console.log(like);

console.log(' ');// просто пробіл
console.log('задача №4');
console.log(' ');//просто пробіл в консолі

const listUl = document.querySelector('ul');// querySelectorAll викличе помилку
listUl.insertAdjacentHTML(
  'beforeend',
  '<li>Текст</li>'
);
console.log(listUl);

console.log(' ');// просто пробіл
//=============================================
console.log('Розміри й прокрутка');
//=============================================
console.log('задача №1');
console.log(' ');//просто пробіл в консолі
let winWidth = window.innerWidth;
let bodyWidth = bodyWindowWidth;
console.log(winWidth, 'ширина з полосою прокрутки');
console.log(bodyWidth, 'ширина вікна без полоси прокрутки');
console.log((winWidth - bodyWidth), 'ширина полоси прокрутки');// ширина полоси прокрутки

console.log(' ');//просто пробіл в консолі
console.log('задача №2');
console.log(' ');//просто пробіл в консолі

function scroll(){
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: "smooth"
  })  
};
  setTimeout(scroll, 1000);

console.log(' ');//просто пробіл в консолі
console.log('задача №3');
console.log(' ');//просто пробіл в консолі

let coord = document.elementFromPoint(400, 600);
console.log(coordBlock, 'отриманий по вказаних координатах обєкт');
console.log(' ');//просто пробіл в консолі

//=============================================
console.log('Розміри й прокрутка');
//=============================================
console.log(' ');//просто пробіл в консолі
console.log('Задача');

const footer = document.querySelector('.footer');// звертаємось до футера
console.log(footer); 

document.addEventListener('click', search);// кладемо на весь документ прослуховування з функцією search
document.addEventListener('keyup', search);// кладемо на весь документ прослуховування з функцією search

const form = document.querySelector('.form__input');// шукаєм елемент з класом form__input
console.log(form);
const maxLength = form.getAttribute('maxlength');// звертаємось до атрибута maxlength 
console.log(maxLength);
const counter = document.querySelector('.counter span');// звертаємось до span в середині counter
counter.innerHTML = maxLength;// змінна де присвоюємо значення в атрибуті maxLength
form.addEventListener('keyup', newCounter);

function newCounter(event){
  const counterResult = maxLength - form.value.length;
  counter.innerHTML = counterResult

}// функція для підрахунку символів

function search(event) {
  if (event.target.closest('.action__button')) {
    footer.classList.toggle('_active');// додаєм клас _active якщо при кліку знаходимо клас .action__button
  }
  if (event.target.closest('.form__input')) {
    event.stop.Propagation;// зупиняємо всплиття щоб не зникав інпут....чомусь видає помилку в консоль як починаю вводити
  }
  if (!event.target.closest('.action')) {
    footer.classList.remove('_active');// видаляємо клас _active якщо при кліку незнаходимо клас .action__button
  }
  if (event.code === 'Escape') {
    footer.classList.remove('_active');
  }

};

