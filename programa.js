const slider = document.querySelectorAll('.slider');
const btnPrev1 = document.getElementById('prev-button1');
const btnNext1 = document.getElementById('next-button1');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('hidden'))
}

function showSlider() {
  slider[currentSlide].classList.add('hidden')
  console.log(currentSlide)
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 2) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  setTimeout(showSlider, 10);
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 2;
  } else {
    currentSlide--;
  }
  setTimeout(showSlider, 10);
}


btnNext1.addEventListener('click', nextSlider)
btnPrev1.addEventListener('click', prevSlider)



const slider2 = document.querySelectorAll('.slider2');
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2 = document.getElementById('next-button2');

let currentSlide2 = 0;

function hideSlider2() {
  slider2.forEach(item => item.classList.remove('on2'));
}

function showSlider2() {
  slider2[currentSlide2].classList.add('on2');
}

function nextSlider2() {
  hideSlider2();
  if (currentSlide2 === slider2.length - 1) {
    currentSlide2 = 0;
  } else {
    currentSlide2++;
  }
  showSlider2();
}

function prevSlider2() {
  hideSlider2();
  if (currentSlide2 === 0) {
    currentSlide2 = slider2.length - 1;
  } else {
    currentSlide2--;
  }
  showSlider2();
}

btnNext2.addEventListener('click', nextSlider2);
btnPrev2.addEventListener('click', prevSlider2);