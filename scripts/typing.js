const texth = "Hello, I'm Ridhesh!"; // the text you want to show
const textp = "I love to work on the big data and developing cool ML models integreated with the application. I am going to publish some of cool projects very soon in the Projects section. Please feel free to explor me through this platform. I would be happy to collaborate with people to work on the awesome projects related to the machine learning and data. "

let index = 0;
  let typingTimeout;
  function type() {
    const typingElement = document.getElementById("typing");
    typingElement.textContent = texth.slice(0, index++);
    if (index > texth.length) {
      clearTimeout(typingTimeout);
      return;
    }
    
    typingTimeout = setTimeout(type, 250);
  }



let indexp = 0;
let typingTimeoutp;

  function typep() {
    const typingElementp = document.getElementById("typingp");
    
    typingElementp.textContent = textp.slice(0, indexp++);
  
    if (indexp > textp.length) {
      clearTimeout(typingTimeoutp)
      return;
    }
    
    typingTimeoutp = setTimeout(typep, 50);
  }

type();
setTimeout(typep, texth.length * 250)