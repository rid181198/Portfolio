var container = document.getElementById('svg-image');
var container2 = document.querySelectorAll('.main-page');
var typing = document.getElementById('typing');
var typingp = document.getElementById('typingp');
var icons = document.querySelectorAll('#icons');
var texts = document.querySelectorAll('.texts');
  
    function resizePlot() {
        container.style.width = window.innerWidth * 0.35 + "px";
        container.style.height = container.style.width*0.5 + "px";

        container.style.marginBottom = 0;
        var width = window.innerWidth;
        var height = window.innerHeight;

        container2[1].style.top = (container2[0].offsetTop + 70) + "px";
        container2[2].style.top = (container2[0].offsetTop + 150) + "px";
        container.style.top = (container2[0].offsetTop + 80) + "px";

        typing.style.fontSize = width*0.035 + "px"; 
        typingp.style.fontSize = width*0.015 + "px";
        
        texts.forEach(element=>{
            element.style.fontSize =  width * 0.02 + "px";
        });         
        for (var i=0; i<icons.length; i++){
            icons[i].style.fontSize = width*0.025 + "px"; 
            icons[i].style.marginBottom = width*0.025 + "px";  
        }

    }
  
    // Call resizePlot() on load and add a listener for the 'resize' event
    resizePlot();
    window.addEventListener('resize', function() {
        window.requestAnimationFrame(resizePlot);
    });