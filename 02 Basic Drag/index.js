const container = document.querySelector('.container');
const box = document.querySelector('.box');
let isDragging = false;
let boxOffsetX = 0;
let boxOffsetY = 0;
container.addEventListener('mousedown', (e) => {
  if (e.target === box) {
    isDragging = true;
    boxOffsetX = e.offsetX;
    boxOffsetY = e.offsetY;
  } else {
    return;
  }
});

container.addEventListener('mouseup', (e) => {
  isDragging = false;
});

container.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const x = e.layerX;
    const y = e.layerY;
    box.style.transform = `translate(${x - boxOffsetX}px, ${y - boxOffsetY}px)`;
  } else {
    return;
  }
});
