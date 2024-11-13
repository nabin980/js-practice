'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// tab component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

// console.log(message.style.height); // cannot get the height set by the class and other only set by us
// console.log(getComputedStyle(message).color);

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

// DOM transversing means walking through the dom (selecting element based on another element)
const h1 = document.querySelector('h1');

// Going down child element

// console.log(h1.querySelectorAll('.highlight'))// select all child not just direct children

// // for direct children only
// console.log(h1.childNodes)
// console.log(h1.children)

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orange';

// Going Upward parent element

// finding direct parent
// console.log(h1.parentNode);
// // use this
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--color-primary)';

// // Side wise siblings
// console.log(h1.nextElementSibling)
// console.log(h1.previousElementSibling);

// // for all siblings
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform ='scale(0.5)'
// })



tabsContainer.addEventListener('click', function(el){
  const clickedButton = el.target.closest('.operations__tab');

  // guard clause
  if(!clickedButton) return;

  //Remove activer
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
 tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

// Add Active and display
  clickedButton.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clickedButton.dataset.tab}`).classList.add('operations__content--active')
})

// mouseenter does not bubble cannot use deligation so use mouseover instead
// Menu fade animation

const handelOver = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if(el !== link){
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    })
  }
}


/// padding "arguments"  into the handler
nav.addEventListener('mouseover',handelOver.bind(0.5));
nav.addEventListener('mouseout',handelOver.bind(1));


// Sticky navigation : Intersection Observer Api

// const obsCallback = function(entries, observer){
//   entries.forEach(entry =>{
//     console.log(entry)
//   })

// }

// const obsOptions = {
//   root: null,
//   threshold:0.1,
// };

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries){
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`,
})

headerObserver.observe(header);

// Revele sections
const allSection = document.querySelectorAll('.section');


const revelSection = function(entries,observer){
const [entry] = entries;

if(!entry.isIntersecting) return;
entry.target.classList.remove('section--hidden');
observer.unobserve(entry.target);
}


const sectionObserver = new IntersectionObserver(revelSection,{
root:null,
threshold:0.15,
})

allSection.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})

// Lazy loading

const imageTargets = document.querySelectorAll('img[data-src]');

const loadImg = function(entries,observer){
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) return;
  
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg,{
root:null,
threshold:0,
rootMargin:"200px",
})

imageTargets.forEach(img => imgObserver.observe(img));