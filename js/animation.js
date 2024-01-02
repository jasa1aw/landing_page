const animationToRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideToRight .4s ease-in-out .2s 1 normal both';
        } else {
            entry.target.style.animation = 'none';
        }
    });
});
const animationToLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideToLeft .4s ease-in-out .2s 1 normal both';
        } else {
            entry.target.style.animation = 'none'; 
        }
    });
});
const animationToUp= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideToUp .5s ease .5s 1 normal both';
        } else {
            entry.target.style.animation = 'none'; 
        }
    });
});
const animationToDown = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideToDown .5s ease .5s 1 normal both';
        } else {
            entry.target.style.animation = 'none'; 
        }
    });
});



const animRight = document.querySelectorAll('.content, .donuts-menu');
animRight.forEach((el)=> animationToRight.observe(el));
const animLeft = document.querySelectorAll('.about-img, .offer');
animLeft.forEach((el)=> animationToLeft.observe(el));
const animDown = document.querySelectorAll('.menu-title, .menu-subtitle, .gallary-title, .galary-subtitle');
animDown.forEach((el)=> animationToDown.observe(el));
const animUp = document.querySelectorAll('.grid-gallary');
animUp.forEach((el)=> animationToUp.observe(el));

const counterAnim= new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        console.log(entry);
        if (entry.isIntersecting) {
            
            if(index === 0 || index === 1){
                const delay = index === 0 ? .3 : .6
                entry.target.style.animation = `slideToRight .5s ease-in-out ${delay}s 1 normal both`;
            }else{
                const delay = index === 2 ? .8 : 1.1
                entry.target.style.animation = `slideToLeft .5s ease-in-out ${delay}s 1 normal both`;
            }
        } else {
            entry.target.style.animation = 'none'; 
        }
    });
});
const counter = document.querySelectorAll('.counter-place');
counter.forEach((el)=> counterAnim.observe(el));




