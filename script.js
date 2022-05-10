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
