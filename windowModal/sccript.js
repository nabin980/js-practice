'use script';

// storing each element to reuse again and again
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // for multiple with same classname but provide in array 

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
// to access it use for loop like for an array

for (i=0; i<btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',openModal)
}

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

// refactoring
// btnCloseModal.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

// overlay.addEventListener('click', function(){
//     modal.classList.add('hidden');
//     modal.classList.add('hidden');
// })

document.addEventListener('keydown',function(e){
    console.log(e.key);
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();

    //refactoring

    // if(e.key === 'Escape'){
    //     if(!modal.classList.contains('hidden')){
    //         closeModal();
    //     }
    // }
})

