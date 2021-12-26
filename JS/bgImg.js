const ImgList = [{fileName: "IU02.jpg", fontColor:"beige"},
            {fileName: "IU03.jpg", fontColor:"black"}, 
            {fileName: "IU04.jpg", fontColor:"beige"}, 
            {fileName: "IU05.jpg", fontColor:"beige"}];

const bgImg = document.querySelector("#bgImg");
const textColor = document.querySelectorAll(".textColor");
const inputBox = document.querySelectorAll("input");

function chooseImg(){
    const index = Math.floor( Math.random() * ImgList.length );
    bgImg.src = `IMG/${ImgList[index].fileName}`;
    
    textColor.forEach(element => {
        element.style.color = `${ImgList[index].fontColor}`;
    });

    inputBox.forEach(element => {
        element.style.borderColor = `${ImgList[index].fontColor}`;
        element.style.color = `${ImgList[index].fontColor}`;
    });

    
}

chooseImg();