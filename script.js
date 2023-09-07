const icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('light-theme');
    if(document.body.classList.contains("light-theme")){
        icon.src="./assets/moon1.svg";
    }else{
        icon.src="./assets/sun.svg";
    }
};
//changing text
(function(){
    var words=[
        "Mechanics",
        "Plumbers",
        "Cleaners",
        "Electricians",
        "Labours"
    ],
    i=0;
    setInterval(function(){
        $('#words').fadeOut(function(){
            $(this).html(words[(i=(i+1)%words.length)]).fadeIn();
        });
    },2000)
})();