const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let userin = document.querySelector("input");
let qr = document.querySelector("#qrcode");
let gen = document.querySelector("button");

async function generateqr(need) {
    qr.setAttribute("src", api + need);
    qr.style.display = "block";
}

gen.addEventListener("click",()=>{
    generateqr(userin.value);
})

