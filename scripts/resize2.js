var texts = document.querySelectorAll('.texts');
var btns = document.querySelectorAll('.btn');
var descs = document.querySelectorAll('.desc');
  
    function resizePlot() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        texts.forEach(element=>{
            element.style.fontSize =  width * 0.02 + "px";
        });
        
        btns.forEach(element=>{
            element.style.fontSize =  width * 0.035 + "px";
        });

        descs.forEach(element=>{
            element.style.fontSize =  35/(1 + 2.7182**(0.0015*(900-width))) + "px";
        })
        

    }
  
    // Call resizePlot() on load and add a listener for the 'resize' event
    resizePlot();
    window.addEventListener('resize', function() {
        window.requestAnimationFrame(resizePlot);
    });