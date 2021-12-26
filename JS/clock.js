const h1 = document.querySelector("#clock");


function clock(){
    const date = new Date();
    h1.innerText = `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

clock();
setInterval(clock, 1000);