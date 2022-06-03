const menu_btn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");


function mobile_menu(){
    if(navbar.style.right == "-100%"){
        navbar.style.right = "0";
        navbar.style.display = "block";
    }
    else{navbar.style.right = "-100%"}
}


window.addEventListener("load",function reveal_hero_text(){
    let hide1 = document.querySelector(".hide1");
    let hide2 = document.querySelector(".hide2");
    let hide3 = document.querySelector(".hide3");

    hide1.classList.add("reveal1");
    hide2.classList.add("reveal2");
    setTimeout(()=>{
        hide3.classList.add("reveal3");},1000)
})
