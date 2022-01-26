'use strict';
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.mainSlide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
let activeSlideIndex = 0;

document.addEventListener('keydown', (e) => {
    if(e.key == 'ArrowUp'){
        changeSlide('up');
    } else if(e.key == 'ArrowDown'){
        changeSlide('down');
    }
    console.log(e.key);
});

upButton.addEventListener('click', () =>{
    changeSlide('up');
});

downButton.addEventListener('click', () =>{
    changeSlide('down');
});

function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex++;

        if(activeSlideIndex === slidesCount){
            activeSlideIndex = 0;
        }
    } else if(direction === 'down'){
        activeSlideIndex--;

        if(activeSlideIndex < 0){
            activeSlideIndex = slidesCount-1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex*height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`;
}