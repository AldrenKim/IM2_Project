
const form= document.getElementsByTagName('form')[0];
const personalInfo = [...document.querySelectorAll('.step')];
const elemInfo = [...document.querySelectorAll('.step-1')];
const jhsInfo = [...document.querySelectorAll('.step-2')];
const shsInfo = [...document.querySelectorAll('.step-3')];
const collegeInfo = [...document.querySelectorAll('.step-4')];
const pgInfo = [...document.querySelectorAll('.step-5')];
const profInfo = [...document.querySelectorAll('.step-6')];
const firstBtn = document.querySelector(".fbutton");
const prevOne = document.querySelector(".prev-1");
const nextOne = document.querySelector(".next-1");
const prevTwo = document.querySelector(".prev-2");
const nextTwo = document.querySelector(".next-2");
const prevThree = document.querySelector(".prev-3");
const nextThree = document.querySelector(".next-3");
const prevFour = document.querySelector(".prev-4");
const nextFour = document.querySelector(".next-4");
const prevFive = document.querySelector(".prev-5");
const nextFive = document.querySelector(".next-5");
const prevSix = document.querySelector(".prev-6");
const lists = document.querySelectorAll("li");

let max =6;
let current =1;

form.onsubmit=()=>{
    return false;
}

prevSix.addEventListener("click", ()=>{
    profInfo.forEach(element=>{
        element.classList.remove("gone-not");
        element.classList.add("gone-active");
    });
    pgInfo.forEach(element=>{
        element.classList.add("gone-not");
        element.classList.remove("gone-active");
    });
});

prevFive.addEventListener("click", function(){
    //current hide
    pgInfo.forEach(element=>{
        element.classList.remove("gone-not");
        element.classList.add("gone-active");
    });
    //go back display
    collegeInfo.forEach(element=>{
        element.classList.add("gone-not");
        element.classList.remove("gone-active");
    });
    current-=1;
});

nextFive.addEventListener("click", function(){
    profInfo.forEach(element=>{
        element.classList.remove("gone-active");
        element.classList.add("gone-not");
    });
    pgInfo.forEach(element=>{
        element.classList.add("gone-active");
        element.classList.remove("gone-not");
    });
    current+=1;
});

prevFour.addEventListener("click", function(){
    //current hide
    collegeInfo.forEach(element=>{
        element.classList.remove("gone-not");
        element.classList.add("gone-active");
    });
    //go back display
    shsInfo.forEach(element=>{
        element.classList.add("gone-not");
        element.classList.remove("gone-active");
    });
    current-=1;
});

nextFour.addEventListener("click", function(){
    pgInfo.forEach(element=>{
        element.classList.remove("gone-active");
        element.classList.add("gone-not");
    });
    collegeInfo.forEach(element=>{
        element.classList.add("gone-active");
        element.classList.remove("gone-not");
    });
    current+=1;
});

prevThree.addEventListener("click", function(){
    shsInfo.forEach(element=>{
        element.classList.remove("gone-not");
        element.classList.add("gone-active");
    });
    jhsInfo.forEach(element=>{
        element.classList.add("gone-not");
        element.classList.remove("gone-active");
    });
    current-=1;
});

nextThree.addEventListener("click", function(){
    collegeInfo.forEach(element=>{
        element.classList.remove("gone-active");
        element.classList.add("gone-not");
    });
    shsInfo.forEach(element=>{
        element.classList.add("gone-active");
        element.classList.remove("gone-not");
    });
    current+=1;
});

prevTwo.addEventListener("click", function(){
    jhsInfo.forEach(element=>{
        element.classList.remove("gone-not");
        element.classList.add("gone-active");
    });
    elemInfo.forEach(element=>{
        element.classList.add("gone-not");
        element.classList.remove("gone-active");
    });
    current-=1;
});

nextTwo.addEventListener("click", function(){
    shsInfo.forEach(element=>{
        element.classList.remove("gone-active");
        element.classList.add("gone-not");
    });
    jhsInfo.forEach(element=>{
        element.classList.add("gone-active");
        element.classList.remove("gone-not");
    });
    current+=1;
});


nextOne.addEventListener("click", function(){
    jhsInfo.forEach(element=>{
        element.classList.remove("gone-active");
        element.classList.add("gone-not");
    });
    elemInfo.forEach(element=>{
        element.classList.add("gone-active");
        element.classList.remove("gone-not");
    });
    current+=1;
});

prevOne.addEventListener("click", function(){
    elemInfo.forEach(element=>{
        element.classList.remove("gone-not");
        element.classList.add("gone-active");
    });
    personalInfo.forEach(element=>{
        element.classList.add("gone-not");
        element.classList.remove("gone-active");
    });
    current-=1;
});

firstBtn.addEventListener("click", function(){
    personalInfo.forEach(element=>{
        element.classList.add("gone-active");
        element.classList.remove("gone-not");
    });
    elemInfo.forEach(element=>{
        element.classList.add("gone-not");
        element.classList.remove("gone-active");
    });
  //  lists[current].classList.
    current+=1;
});