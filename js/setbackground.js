console.log("jeg er i set background")

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbcol.style.color = col;

}
function useColorPicker(){
    let col = inpColorPicker.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
    pbcol.style.color = col;
}
let inpColorValue = document.querySelector(".inpColorValue")
let inpColorPicker = document.getElementById("inpColorPicker")

let inp = document.querySelector(".inpColor")
console.log(inp)

let pbcol = document.querySelector(".pbSetColor")
console.log(pbcol)

pbcol.textContent = "Tryk på mig for at sætte color"

let bdy = document.querySelector("body")
console.log(bdy)

const pTags = document.getElementsByTagName('p')
console.log(pTags)

let pTagArr = Array.from(pTags);
console.log("pTagArr")
console.log(pTagArr)
pTagArr.forEach(p => p.textContent = "hej fra foreach");

pbcol.addEventListener('click', setBackgroundColor)

document.addEventListener('keyup', setBackgroundColor);

inpColorPicker.addEventListener('input', useColorPicker);
                                    //input bliver trigget hver gang man kalder værdien

