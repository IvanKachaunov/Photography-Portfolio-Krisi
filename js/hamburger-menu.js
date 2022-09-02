function myFunction() {
    var x = document.getElementById("Items");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  const hamburger = document.querySelector('.hamburger-menu')
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active')
  });
  