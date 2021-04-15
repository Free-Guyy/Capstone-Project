const colorget=document.getElementById("input-color-switch");
colorget.addEventListener('click',checkMode);
function checkMode(){
    console.log('checking....');
    if(colorget.checked){
        console.log('dark on');
        darkModeOn();
    }
    else{
        console.log("dark off");
        darkModeOff();
    }
}
function darkModeOn(){
    document.body.classList.add("dark-mode");
}
function darkModeOff(){
    document.body.classList.remove("mode");
}