let subscribe = document.getElementById("subscribeForm")
let inputEle1 = document.getElementById("name")
let inputEle2 = document.getElementById("email")
let paraEl = document.getElementById("nameErrMsg")
let paraEl2 = document.getElementById("emailErrMsg")
let subscribeButton = document.getElementById("subscribeBtn")


subscribe.addEventListener("submit", function(event) {
    event.preventDefault();

});

inputEle1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraEl.textContent = "Required*"
    } else {
        paraEl.textContent = ""
    }
})


inputEle2.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        paraEl2.textContent = "Required*"
    } else {
        paraEl2.textContent = ""
    }
})


let btn = document.getElementById("subscribeBtn")
btn.onclick = function() {
    if (inputEle1.value === "" && inputEle1.value === "") {
        paraEl.textContent = "Required*"
        paraEl2.textContent = "Required*"
    }
}

let navlinks = document.querySelectorAll("header nav a");

function smoothScroll(event) {



    const href = this.getAttribute("href");


    document.querySelector(href).scrollIntoView({

        behavior: "smooth"

    });
    event.preventDefault();
}
for (const link of navlinks) {

    link.addEventListener("click", smoothScroll());

}
