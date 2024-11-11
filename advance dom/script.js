'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  e.preventDefault();
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener("click",openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector(".header")

/// creating element  and inserting element

const message = document.createElement("div");
message.classList.add("cookie-message");
// messgae.textContent = "We use cookie for improved functionality and anylytics";
message.innerHTML =  'We use cookie for improved functionality and anylytics.<button class="btn btn--close-cookie">Got it</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// delete
document.querySelector('.btn--close-cookie').addEventListener("click", function(){
  message.remove();
})

// style

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.height); // cannot get the height set by the class and other only set by us
console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat( getComputedStyle(message).height,10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(){
  // const s1coords = section1.getBoundingClientRect();

  // scrolling
  // old technique
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior:"smooth", 
  // }); 

  // new one
  section1.scrollIntoView({behavior:'smooth'});
})

// bubbling and propagation

// rbg(255,255,255)

// const randomInt = (min,max) => Math.floor(Math.random() * (max-min+1) + min); 
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

// document.querySelector(".nav__link").addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
// // stop bubbling or propagation
//   // e.stopPropagation();// not good to do like this
 
// })

// document.querySelector(".nav__links").addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
 
// })

// document.querySelector(".nav").addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
 
// })

// page navigation with out deligation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })

// page navigation with event deligation
//1. add event listner to commmon parent
//2. find out wher the event genereated from
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();

  if(e.target.classList.contains('nav__link')){
    console.log('links')
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})