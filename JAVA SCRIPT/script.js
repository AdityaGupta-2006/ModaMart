let hameburger = document.querySelector("#hameburger");
hameburger.addEventListener("clcik",()=>{
    let hamitems = document.querySelector(".ham-items")
    hamitems.style.display="block"
})

let content = document.querySelector(".content");
let btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    content.classList.toggle("dark");
})