const texth = "Hello, I'm Ridhesh!"; // the text you want to show
const textp = "As a Data Science and Analytics enthusiast, I enjoy creating data models, visualizations, and neural network pipelines using popular Python libraries such as scikit-learn, TensorFlow, PyTorch, pandas and numpy. I also have experience working with Tableau and Power BI for data visualization. Additionally, I am currently practicing both frontend and backend development using HTML, CSS, JavaScript, and Flask in Python. My educational background is in Astrophysics, but I am passionate about working on both data science and astrophysics projects. If you share a similar interest, let's connect and explore opportunities to collaborate. "

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
    
    typingTimeoutp = setTimeout(typep, 100);
  }

type();
setTimeout(typep, texth.length * 250)