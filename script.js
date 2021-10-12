// Sticky

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 40);
})

// Top

window.addEventListener("scroll", function(){
    var top = document.querySelector(".button");
    top.classList.toggle("on", window.scrollY > 440);
})

// Scroll

const links = document.querySelectorAll("a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

// Example

var exampleBtn1 = document.querySelector(".example-btn1");
var exampleBtn2 = document.querySelector(".example-btn2");
var exampleBtn3 = document.querySelector(".example-btn3");
var exampleBtn4 = document.querySelector(".example-btn4");
var exampleBtn5 = document.querySelector(".example-btn5");
var exampleBtn6 = document.querySelector(".example-btn6");
var exampleBig = document.querySelector(".example-big");
var exampleX = document.querySelector(".exampleX");

exampleBtn1.addEventListener('click', function(){
    exampleBig.classList.toggle("example-on");
    
})
exampleBtn2.addEventListener('click', function(){
    exampleBig.classList.toggle("example-on");
    
})
exampleBtn3.addEventListener('click', function(){
    exampleBig.classList.toggle("example-on");
    
})
exampleBtn4.addEventListener('click', function(){
    exampleBig.classList.toggle("example-on");
    
})
exampleBtn5.addEventListener('click', function(){
    exampleBig.classList.toggle("example-on");
    
})
exampleBtn6.addEventListener('click', function(){
    exampleBig.classList.toggle("example-on");
    
})
exampleX.addEventListener('click', function(){
    exampleBig.classList.remove("example-on")
})

// Form

var formBtn = document.querySelector(".form-btn");
var form = document.querySelector(".form");
var formX = document.querySelector(".formX");

formBtn.addEventListener('click', function(){
    form.classList.toggle("form-on");
    
})
formX.addEventListener('click', function(){
    form.classList.remove("form-on")
})

// Nav

var burger = document.querySelector(".burger");
var nav = document.querySelector("nav");

burger.addEventListener('click', function(){
    nav.classList.toggle("nav-on");
})