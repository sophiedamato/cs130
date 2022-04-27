
const resetButtonBackgrounds = () => {
    const color = '#EEE';
    document.querySelector("#btn1").style.backgroundColor = "rgb(133, 133, 133)";
    document.querySelector("#btn2").style.backgroundColor = "rgb(133, 133, 133)";
    document.querySelector("#btn3").style.backgroundColor = "rgb(133, 133, 133)";
    document.querySelector("#btn4").style.backgroundColor = "rgb(133, 133, 133)";
}
const makeRed = () => {
    // your code here...
    console.log( document.querySelector("body").style.backgroundColor = "red");
    console.log( document.querySelector("button").style.backgroundColor = "red");
};

const makeBlue = () => {
    // your code here...
    console.log(document.querySelector("body").style.backgroundColor = "blue");
    console.log( document.querySelector("#btn2").style.backgroundColor = "blue");
};

const makePink = () => {
    // your code here...
    console.log(document.querySelector("body").style.backgroundColor = "pink");
    console.log( document.querySelector("#btn3").style.backgroundColor = "pink");
};

const makeOrange = () => {
    // your code here...
    console.log(document.querySelector("body").style.backgroundColor = "orange");
    console.log( document.querySelector("#btn4").style.backgroundColor = "orange");
};

getElementbyID