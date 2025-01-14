const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close");

if(bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add("active");
    })
}

if(closeBtn) {
    closeBtn.addEventListener("click", () => {
        navbar.classList.remove("active");
    })
}

// Select Product Section Script Here 

const MainIng = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function() {
    MainIng.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    MainIng.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    MainIng.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    MainIng.src = smallImg[3].src;
}