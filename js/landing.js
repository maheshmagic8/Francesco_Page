const hr_percentage = document.querySelector(".hr_percentage");
const hr = document.querySelector(".hr");
const hero_fotter = document.querySelector(".hero_fotter");
const ham_burg = document.querySelector(".ham_burg");
const hide_Manu = document.querySelector(".hide-Manu");
const nav = document.querySelector(".navigation");
const hero_text = new SplitType("#hero_text h1");
const img_1 = document.querySelector(".img-1");
const img_2 = document.querySelector(".img-2");
const img_3 = document.querySelector(".img-3");

let intervalID;
let count = 0;


intervalID = setInterval(() => {
    if(count === 100){
        clearInterval(intervalID)
        hr_percentage.style.opacity="0";
        hr.style.opacity="0";
        hero_fotter.style.transitionDelay="4s"
        hero_fotter.style.opacity="1";
        nav.style.opacity="1";
        nav.style.transitionDelay="4s";
        img_1.style.opacity="1";
        img_2.style.opacity="1";
        img_3.style.opacity="1";
               
    }else{
        count+=1;
        hr_percentage.innerHTML = count +"%";
    }
}, 30);

// HNMBURGER MANU 
function ham_open(){
    document.querySelector(".ham_burg").classList.toggle("active");
    document.querySelector(".hide-Manu").classList.toggle("active-Manu");
}

//////////////// GSAP ANIMATION ///////////////


gsap.to(".char",{
    y:0,
    delay:3.6,
    stagger:0.09,
    duration:.2
})

gsap.to(".img-1 img",{
    rotation: 10,
    duration: 0.5,
    repeat: 0,
    delay:3
})

gsap.to(".img-2 img",{
    rotation: 20,
    duration: 0.5,
    repeat: 0,
    delay:3,
})


gsap.from(".img-3 img",{
    scaleX: 0,
    duration:0.5,
    delay:3,
})

gsap.to(".img-3 img",{
    scaleX:1,
    duration:0.5,
    delay:3
})