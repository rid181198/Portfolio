var texts = document.querySelectorAll('.texts');
var btns = document.querySelectorAll('.btns');
var descs = document.querySelectorAll('.desc');
var labels = document.querySelectorAll('.labels');
var ans = document.querySelectorAll('.ans');
var mutes = document.querySelectorAll('.text-muted');
var submits = document.querySelectorAll('.submit');

  
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
        
        labels.forEach(element=>{
            element.style.fontSize =  40/(1 + 2.7182**(0.0013*(900-width))) + "px";
        })

        ans.forEach(element=>{
            element.style.fontSize =  30/(1 + 2.7182**(0.0013*(900-width))) + "px";
        })

        mutes.forEach(element=>{
            element.style.fontSize =  20/(1 + 2.7182**(0.0013*(900-width))) + "px";
        })

        submits.forEach(element=>{
            element.style.fontSize =  40/(1 + 2.7182**(0.0013*(900-width))) + "px";
        })

    }
  
    // Call resizePlot() on load and add a listener for the 'resize' event
    resizePlot();
    window.addEventListener('resize', function() {
        window.requestAnimationFrame(resizePlot);
    });