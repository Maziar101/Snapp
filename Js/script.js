let download_app = document.getElementById("download-app-button");
let close_btn = document.getElementById("close-btn");
let click_in_menu = document.getElementById("click-icon-in-menu");
let up_arrow = document.getElementById("up-arrow");
let icons_nav = document.getElementById("first-svg");
let second_svg = document.getElementById("second-svg");
icons_nav.addEventListener("click" , function(){
    document.getElementById("menu-items").style.display = "block";
    document.getElementById("second-svg").style.display = "block";
    document.getElementById("first-svg").style.display = "none";
    document.getElementById("first-svg").style.marginTop = "8px !important";
});
second_svg.addEventListener("click" , function(){
    document.getElementById("menu-items").style.display = "none";
    document.getElementById("first-svg").style.display = "block";
    document.getElementById("second-svg").style.display = "none";
});
download_app.addEventListener("click" , function(){
    document.getElementById("pop-up-download").style.display = "block";
});
close_btn.addEventListener("click" , function(){
    document.getElementById("pop-up-download").style.display = "none";
});
click_in_menu.addEventListener("click" , function(){
    document.getElementById("pop-up-download-menu").style.display = "block";
    document.getElementById("menu-items").style.overflowY = "scroll";
    document.getElementById("up-arrow").style.display = "block"
    document.getElementById("click-icon-in-menu").style.display = "none";
    // document.getElementById("click-icon-in-menu").style.transform = "rotate(270deg)";
    // ! باید ی آیکون دیگه اینجا بزاری نمیشه اونو چرخش داد
});
up_arrow.addEventListener("click" , function(){
    document.getElementById("pop-up-download-menu").style.display = "none";
    document.getElementById("menu-items").style.overflowY = "hidden";
    document.getElementById("up-arrow").style.display = "none";
    document.getElementById("click-icon-in-menu").style.display = "block";
});