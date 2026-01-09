const blossoms = document.querySelector('.blossoms');

for (let i = 0; i < 30; i++) {
  const petal = document.createElement('span');
  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.animationDuration = 5 + Math.random() * 5 + 's';
  petal.style.opacity = Math.random();
  blossoms.appendChild(petal);
}
