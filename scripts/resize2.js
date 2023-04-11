var texts = document.querySelectorAll('.texts');
var btns = document.querySelectorAll('.btn');
  
    function resizePlot() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        texts.forEach(element=>{
            element.style.fontSize =  width * 0.02 + "px";
        });
        
        btns.forEach(element=>{
            element.style.fontSize =  width * 0.035 + "px";
        });
        

    }
  
    // Call resizePlot() on load and add a listener for the 'resize' event
    resizePlot();
    window.addEventListener('resize', function() {
        window.requestAnimationFrame(resizePlot);
    });