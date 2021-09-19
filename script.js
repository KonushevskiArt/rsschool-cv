// smooth scroll

const navLinks = document.querySelectorAll('.nav a');

function smoothScroll(e, id) {
  e.preventDefault()
  const section = document.querySelector(id)
  section.scrollIntoView({ behavior: 'smooth' });
}

navLinks.forEach(el => {
  el.onclick = (e) => {
    smoothScroll(e, el.dataset.id)
    body.style.overflow = '';
    burger.classList.remove('active');
    nav.classList.remove('active');
    body.style.marginRight = 0;
  };
})

// btn mnove up
const btnMoveUp = document.querySelector('.wrapper-move-up')

const changeBtnMoveUp = (e) => {
  const btnStyle = window.getComputedStyle(btnMoveUp);

  if (window.scrollY > window.innerHeight && btnStyle.display === 'none') {
    btnMoveUp.style.display = 'flex';
    btnMoveUp.style.opacity = 0;
    setTimeout(() => {
      btnMoveUp.style.opacity = 1;
    }, 4)
  } 

  if ((window.scrollY < window.innerHeight && btnStyle.display === 'flex')) {
    btnMoveUp.style.opacity = 0;
    setTimeout(() => {
      btnMoveUp.style.display = 'none';
    }, 300)
  }
}

window.addEventListener('scroll', changeBtnMoveUp)
btnMoveUp.onclick = () => window.scrollTo({
  top: 0,
  behavior: "smooth"
})

//active menu 
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav'); 
const body = document.querySelector('body');
const navList = nav.querySelector('.nav-list');

burger.onclick = () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  nav.style.visibility = 'visible';
  if (burger.classList.contains('active')) {
    body.style.overflow = 'hidden';
    body.style.marginRight = '17px';
  } else {
    body.style.overflow = '';
    body.style.marginRight = 0;
  }
}
window.onclick = (e) => {
  if (e.target !== navList 
    && nav.classList.contains('active') 
    && (e.target !== burger && e.target.parentElement !== burger) ) {
    burger.classList.remove('active');
    nav.classList.remove('active');
    body.style.overflow = '';
    body.style.marginRight = 0;
  }
}

// console message

console.log(`
  +вёрстка валидная +10 (+10)
  +вёрстка семантическая +20 (+18)
  article, footer, header, main, nav, section, h1, h3, h4.
  9 * 2 = 18
  +для оформления СV используются css-стили +10 (+10)
  +контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10 (+10)
  +вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10 (+10)
  // не знаю считается ошибкой или нет блок с кодом, но если его делать адаптивным то выглядеть это будет отвратительно поэтому я оставил его фиксированным на экранах меньше 576px   
  +есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного меню можно скопировать с макета музея +10 (+10)
  +на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10 (+10)
  +контакты для связи и перечень навыков оформлены в виде списка ul > li +10 (+10)
  +CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10 (+10)
  +CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10 (+10)
  +CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10 (+10)
  +CV выполнено на английском языке +10 (+10)
  +выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10 (+ 10)
  +есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). +10 (+10)
  Вниманию авторов работы. Убедитесь, что видео проигрывается и ссылка на транскрипцию открывается в режиме инкогнито браузера.
  дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10 (+10)
  ---------------
  итого я насчитал 158 баллов 
  `)