particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "size": { "value": 3 },
    "color": { "value": ["#1e90ff", "#00bfff", "#8a2be2"] }, 
    "move": { "speed": 2 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#1e90ff", 
      "opacity": 0.4,
      "width": 1
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    }
  }
});



const frases = [
    "Comece agora"
];

const typingElement = document.getElementById("typing");
let fraseIndex = 0;
let letraIndex = 0;

function digitar() {
  if (letraIndex < frases[fraseIndex].length) {
    typingElement.innerHTML += frases[fraseIndex].charAt(letraIndex);
    letraIndex++;
    setTimeout(digitar, 300);
  } else {
    setTimeout(apagar, 500);
  }
}

function apagar() {
  if (letraIndex > 0) {
    typingElement.innerHTML = frases[fraseIndex].substring(0, letraIndex - 1);
    letraIndex--;
    setTimeout(apagar, 50);
  } else {
    fraseIndex = (fraseIndex + 1) % frases.length;
    setTimeout(digitar, 500);
  }
}

digitar();



