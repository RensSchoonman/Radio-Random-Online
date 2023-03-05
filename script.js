let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');

// Penguin Image
let penguinImg = new Image();
penguinImg.src = 'https://www.deco-artisanat.com/2568/marine-giant-penguin.jpg';

// Penguin Object
let penguin = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 80,
  height: 80,
  speed: 5,
  draw: function() {
    ctx.drawImage(penguinImg, this.x, this.y, this.width, this.height);
  }
}

// Game Loop
function gameLoop() {
  // Clear Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw Penguin
  penguin.draw();
  
  // Move Penguin
  if (keys.ArrowLeft && penguin.x > 0) {
    penguin.x -= penguin.speed;
  }
  if (keys.ArrowRight && penguin.x + penguin.width < canvas.width) {
    penguin.x += penguin.speed;
  }
  if (keys.ArrowUp && penguin.y > 0) {
    penguin.y -= penguin.speed;
  }
  if (keys.ArrowDown && penguin.y + penguin.height < canvas.height) {
    penguin.y += penguin.speed;
  }
  
  // Request Next Frame
  window.requestAnimationFrame(gameLoop);
}

// Keyboard Input
let keys = {};
document.addEventListener('keydown', function(event) {
  keys[event.code] = true;
});
document.addEventListener('keyup', function(event) {
  keys[event.code] = false;
});

// Start Game
window.requestAnimationFrame(gameLoop);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const form = document.getElementById("quiz-form");
const answers = ["a", "c", "a", "b", "b", "a"];
const result = document.createElement("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
  ];

  let score = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === answers[index]) {
      score += 1;
    }
  });

  result.textContent = `You scored ${score} out of 6.`;
  form.appendChild(result);
});
