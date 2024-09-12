console.log("jeg er i ddcolor")

const colArray = ["red", "green", "yellow", "blue", "orange"]

const ddColor = document.getElementById(" ddColor")
let bdy = document.querySelector("body")
const pbFillDropdown = document.getElementById("pbFillDropdown")


function fillDropdown(item){
    const el = document.createElement("option")

    el.textContent = item

    ddColor.appendChild(el)
}
function addColors(btn) {
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown);
    console.log(document.all)
}
function setBackgroundColor(el){
    const selindex = ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex];
    const color = selectedOption.innerText
    console.log(color)
    bdy.style.backgroundColor = color
}
ddColor.addEventListener('change', setBackgroundColor)
pbFillDropdown.addEventListener('click', addColors)
