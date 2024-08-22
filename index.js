let manulist = document.getElementById("nevBar");
let productImg = document.getElementById("productImg");

function mouseOverToggle() {
    if (manulist.style.display === "none") {
        manulist.style.display = "block";
        productImg.style.marginTop = "20rem";
    }
      
     else {
        manulist.style.display = "none";
        productImg.style.marginTop = "1rem";
    }
}