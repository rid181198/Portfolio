var container = document.getElementById('svg-image');
var typing = document.getElementById('typing');
var typingp = document.getElementById('typingp');
  
    function resizePlot() {
        container.style.width = window.innerWidth * 0.35 + "px";
        container.style.height = container.style.width*0.5 + "px";   
        typing.style.fontSize = window.innerWidth*0.035 + "px"; 
        typingp.style.fontSize = window.innerWidth*0.015 + "px";  

    }
  
    // Call resizePlot() on load and add a listener for the 'resize' event
    resizePlot();
    window.addEventListener('resize', function() {
        window.requestAnimationFrame(resizePlot);
    });