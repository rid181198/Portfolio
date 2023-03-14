const colorTrail = document.getElementById('color-trail');

document.addEventListener('mousemove', (event) => {
  const xPos = event.clientX;
  const yPos = event.clientY;

  const trailItem = document.createElement('div');
  trailItem.classList.add('color-trail-item');
  colorTrail.appendChild(trailItem);

  setTimeout(() => {
    trailItem.style.transform = 'scale(2)';
    trailItem.style.opacity = 0;
  }, 100);

  setTimeout(() => {
    trailItem.remove();
  }, 1000);

  const itemPos = trailItem.getBoundingClientRect();
  trailItem.style.top = `${yPos - itemPos.height / 2}px`;
  trailItem.style.left = `${xPos - itemPos.width / 2}px`;
});
