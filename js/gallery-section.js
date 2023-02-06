const mobileNav = document.getElementsByClassName("mobile-menu")[0];
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const galleryFiltersLinks = document.querySelectorAll('.gallery-filters li a');
const galleryFiltersImages = document.querySelectorAll('.gallery .column img');
const imageBaby = document.querySelector("#c2-p3");
var mobileQueriesTablet = window.matchMedia("(max-width: 800px)");
var mobileQueriesMobile = window.matchMedia("(max-width: 400px)")
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

navigation();

function navigation(){
  galleryFiltersLinks.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.category;
      galleryFiltersImages.forEach(image => {
        if(category === "all" && mobileQueriesTablet.matches){
          imageBaby.style.height = "40%";
        }
        if(image.dataset.category === "portraits" && mobileQueriesTablet.matches){
          imageBaby.style.height = "100%";
        }
        if(category === "all" && mobileQueriesMobile.matches){
          imageBaby.style.height = "100%";
        }
        if(image.dataset.category === "portraits" && mobileQueriesMobile.matches){
          imageBaby.style.height = "100%";
        }
        if(galleryFiltersLinks[0].classList.contains('active')){
          imageBaby.style.height = "100%";
        }
        if (image.dataset.category === category || category === 'all') {
          image.style.opacity = "1";
          image.style.display = "block";
        } else {
          image.style.opacity = "0";
          image.style.transition = "opacity 0.5s ease-in-out";
          image.style.display = "none";
        }
      });   
      // remove active class from all elements
      galleryFiltersLinks.forEach(e => e.classList.remove('active'));
      // add active class to the clicked element
      filter.classList.add('active');
})
})
}