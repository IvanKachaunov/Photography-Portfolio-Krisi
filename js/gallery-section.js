const mobileNav = document.getElementsByClassName("mobile-menu")[0];
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
// const exit = document.getElementById("exit");

if(mobileNav){
    mobileNav.addEventListener('click', () => {
      hamburgerMenu.style.right = "0px"
    })
}

if(exit){
    exit.addEventListener('click', () => {
      hamburgerMenu.style.right = "-300px"
    })
}