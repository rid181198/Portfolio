const spans = document.querySelectorAll('.brand span');
let delay = 200;

function increaseFontSizes() {
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.fontSize = '1.8rem';
    }, delay * index);
  });
  
  setTimeout(() => {
    decreaseFontSizes();
  }, delay * spans.length);
}

function decreaseFontSizes() {
  spans.forEach((span, index) => {
    setTimeout(() => {
      span.style.fontSize = '1.2rem';
    }, delay * (spans.length - index - 1));
  });
  
  setTimeout(() => {
    increaseFontSizes();
  }, delay * spans.length);
}

increaseFontSizes();
