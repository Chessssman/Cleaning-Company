let currentBgIndex = 1;
const preloadedImages = [];

// Предварительная загрузка изображений
for (let i = 1; i <= 3; i++) {
  const img = new Image();
  img.src = `../images/new_intro ${i}.png`;
  preloadedImages.push(img);
}

function changeBackground() {
  const introSection = document.querySelector('.intro');
  introSection.style.backgroundImage = `url("../images/new_intro ${currentBgIndex}.png")`;
  
  currentBgIndex = currentBgIndex % 3 + 1;
}

setInterval(changeBackground, 3000);
