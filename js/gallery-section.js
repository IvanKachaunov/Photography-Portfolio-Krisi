  /* colors needed: ("color", "rgb(46, 43, 43)"); 
    selectors: .gallery-filters .column #Photos #Videos .gallery-filters a
    To Do: use Vanilla Js to open mini navs when clicked on Images or Videos
    and then asyncronically load images or videos when you click on certain mini nav link
    .gallery accesses all images
    .gallery-filters a accesses all gallery subsections 
*/

window.onload = function(){
let photos = document.querySelector("#Photos");
let videos = document.querySelector("#Videos");
let subsection = document.querySelectorAll(".gallery-filters a");
let gallery = document.querySelector(".gallery");

photos.classList.add("active");
// $(document).ready(function() {  //using jquery just for a library
//   // vanilla JS
//   var $container = $('.column').imagesLoaded().progress( function() {
//     // $container.isotope('layout');
//   // filter items when filter link is clicked
//   $('.gallery-filters li a').on('click', function() {
//       var selector = $(this).data('filter');
//       // initialize isotope
//       $container.isotope({
//         // options...
//         filter: selector,
//         layoutMode: "masonry",
//         percentPosition: true
//       });
//   });
// });
  
//   })

subsection.forEach((element) => {
  if (element.classList.contains("active")){
    element.classList.remove("active");
  }
  element.style.display = "inline"
  element.onclick = function(){
  if (element.classList.contains("active")){
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
    setTimeout(() => {
      gallery.style.opacity = "1"
      gallery.style.display = "flex"
    }, 2000);
}
});

photos.onclick = function (){

  if (photos.classList.contains("active")){
    photos.classList.remove("active");
  } else {
    photos.classList.add("active");
  }
  if (videos.classList.contains("active")){
    videos.classList.remove("active");
  }

  subsection.forEach((element) => {
    element.style.display = "inline"

  })

//   for(let i = 0; i <= subsection.length - 1; i++){
//     subsection[i].style.display = "inline"
//     subsection[i].onclick = function () {
//       setTimeout(() => {
//       // gallery.style.pointerEvents = "all"
//       gallery.style.opacity = "1"
//       gallery.style.display = "flex"
//       }, 2000);
//     }
// }

};

videos.onclick = function (){

  if (videos.classList.contains("active")){
    videos.classList.remove("active");
  } else{
    videos.classList.add("active");
  }

  if (photos.classList.contains("active")){
    photos.classList.remove("active");
  }

    for(let j = 0; j <= subsection.length - 1; j++){
      subsection[j].style.display = "none"
      gallery.style.display = "none"
    }
};

// window.onscroll = function() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.querySelector(".top-nav").style.background = "rgb(28, 28, 28)"
//     document.querySelector("#Items").style.background = "rgb(28, 28, 28)"
//   } else {    
//     // document.querySelector(".top-nav").style.padding = "30px 0px"
//     document.querySelector(".top-nav").style.background = "linear-gradient(to bottom, black 0%, transparent 100%)"
//     document.querySelector("#Items").style.background = "none"
//   }

//   if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
//     document.querySelector(".top-nav").style.background = "linear-gradient(to bottom, black 0%, transparent 100%)"
//   } if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
//     document.querySelector(".top-nav").style.background = "rgb(19, 18, 18)"
//   }

//   setTimeout(() => {
//     document.querySelector(".top-nav").style.background = "linear-gradient(to bottom, black 0%, transparent 100%)"
// }, 4000);

// }
};

//Stefcho code

// var lastScrollTop = 0;
//     var st = window.pageYOffset || document.documentElement.scrollTop;
//     var $navMenuEl = document.querySelector('.top-nav');
//     if (st > lastScrollTop){ // scroll down
//         $navMenuEl.classList.add('collapsing-menu-down');
//         setTimeout(function () {
//             $navMenuEl.classList.remove('collapsing-menu-down');
//             $navMenuEl.classList.add('scrolledIn');
//         }, 300);
//     } else { // scroll up
//         $navMenuEl.classList.add('collapsing-menu-up');

//         setTimeout(function () {
//             $navMenuEl.classList.remove('collapsing-menu-up');
//             $navMenuEl.classList.remove('scrolledIn');
//         }, 300);
//     }
//     lastScrollTop = st;
// }
// }

// var star = document.getElementById('star');
// var starAnimations = ['starFall 2s forwards','starFall2 2s forwards','starFall3 2s forwards','starFall4 2s forwards'];

// setInterval(function(){
//     star.style.animation=starAnimations[Math.floor(Math.random()*4)];

// },5000);

// star.addEventListener('animationend',function(){
//     star.style.animation='none';
// });



// window.addEventListener("scroll", function(){
// let asd = document.querySelectorAll("#top-nav");
// asd.style.background = "background-color: rgb(19, 18, 18);"
// })