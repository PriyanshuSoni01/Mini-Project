const icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('light-theme');
    if(document.body.classList.contains("light-theme")){
        icon.src="./assets/moon1.svg";
    }else{
        icon.src="./assets/sun.svg";
    }
};
