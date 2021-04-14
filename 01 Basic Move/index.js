const box = document.querySelector('.box');
const container = document.querySelector('.container');
console.log(container.getBoundingClientRect());

container.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const t = container.getBoundingClientRect().top;
  const l = container.getBoundingClientRect().left;
  console.log(e.offsetX, e.offsetY);
  box.style.left = `${x - l - 25}px`;
  box.style.top = `${y - t - 25}px`;
});

//box.style.transform = `translate(${x}px, ${y}px)`;
