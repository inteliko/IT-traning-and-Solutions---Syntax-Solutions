const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu =  document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};




// about
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



const counts = [6, 60, 26, 34];
const countEls = document.querySelectorAll('.counter-item p');

function animateCount(el, endValue, duration) {
  let startValue = 0;
  let startTime = null;
  
  function step(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    
    const progress = timestamp - startTime;
    const increment = Math.floor((endValue - startValue) * progress / duration);
    
    el.innerText = startValue + increment;
    
    if (progress < duration) {
      window.requestAnimationFrame(step);
    } else {
      el.innerText = endValue;
    }
  }
  
  window.requestAnimationFrame(step);
}

countEls.forEach((el, i) => {
  animateCount(el, counts[i], 3000);
});






