function whoamidesc(){
    var whoamidesc = document.querySelector('.whoamidesc');
    var whatidodesc = document.querySelector('.whatidodesc');
    var whereamidesc = document.querySelector('.whereamidesc');
    var buttons = document.querySelectorAll('.btn');
    if (whoamidesc.style.display === 'none'){
        whoamidesc.style.display='block';
        whatidodesc.style.display='none';
        whereamidesc.style.display='none';
        buttons.forEach(element=>{
            element.style.marginBottom =   "2%";
        }); 

    } else {
        whoamidesc.style.display = 'none';
        buttons.forEach(element=>{
            element.style.marginBottom =   "10%";
        }); 
    }
}

function whatidodesc(){
    var whatidodesc = document.querySelector('.whatidodesc');
    var whoamidesc = document.querySelector('.whoamidesc');
    var whereamidesc = document.querySelector('.whereamidesc');
    var buttons = document.querySelectorAll('.btn');
    if (whatidodesc.style.display === 'none'){
        whatidodesc.style.display='block';
        whereamidesc.style.display='none';
        whoamidesc.style.display = 'none';
        buttons.forEach(element=>{
            element.style.marginBottom =   "2%";
        }); 
    } else {
        whatidodesc.style.display = 'none';
        buttons.forEach(element=>{
            element.style.marginBottom =   "10%";
        }); 
    }
}

function whereamidesc(){
    var whereamidesc = document.querySelector('.whereamidesc');
    var whatidodesc = document.querySelector('.whatidodesc');
    var whoamidesc = document.querySelector('.whoamidesc');
    var buttons = document.querySelectorAll('.btn');
    if (whereamidesc.style.display === 'none'){
        whereamidesc.style.display='block';
        whatidodesc.style.display='none';
        whoamidesc.style.display = 'none';
        buttons.forEach(element=>{
            element.style.marginBottom =   "2%";
        }); 
    } else {
        whereamidesc.style.display = 'none';
        buttons.forEach(element=>{
            element.style.marginBottom =   "10%";
        }); 
    }
}