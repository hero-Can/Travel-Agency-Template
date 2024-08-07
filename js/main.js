let scrollContainer = document.querySelector(".gallery");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

scrollContainer.addEventListener("wheel",(evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaX;
});

leftBtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

rightBtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});


let first = document.querySelector(".first");
let second = document.querySelector(".second");

window.onscroll = function () {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Define scroll range dynamically based on viewport and document height
    const startScroll = documentHeight * 0.6; // Start point (e.g., 50% of document height)
    const endScroll = documentHeight * 0.8; // End point (e.g., 75% of document height)
    if (scrollTop >= startScroll && scrollTop <= 1111) {
        first.classList.add("up-ovale");
        second.classList.add("down-ovale");
        console.log("true");
    }else{
        first.classList.remove("up-ovale");
        second.classList.remove("down-ovale");
    }
}


// window.onscroll = function () {
//    console.log(this.scrollY);
// }

let contactElements = document.querySelectorAll(".card input, .card textarea");


// Add focus event listener to each element
contactElements.forEach(element => {
    element.addEventListener('focus', function () {
        element.style.borderColor = "black";
    });
    element.addEventListener('blur', function () {
        element.style.borderColor = "white";
    });
});