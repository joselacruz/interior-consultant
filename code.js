var pic = document.getElementById("icone-menu");
var clascha = document.getElementById("barrita");
var parafo = document.getElementById("title-header");
var main = document.getElementById("main-page-hiden");
var piepag = document.getElementById("foder-page-hiden");


pic.addEventListener("click",esconderElementos);


function esconderElementos (){
    clascha.classList.toggle("main-menu--show");
    parafo.classList.toggle("puta");
    main.classList.toggle("main-page-block");
    piepag.classList.toggle("arcihi");
    pic.classList.toggle("menu-img-container-two");
}


