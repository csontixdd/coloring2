const button= document.querySelector("button");

const inputs = document.querySelectorAll("input");
inputs.forEach(inp => {
inp.addEventListener("")

})

button.onclick =()=> {
    const red=document.querySelector("input:first-child");
    const green=document.querySelector("input:nth-child(2)");
    const blue=document.querySelector("input:last-of-type");
    const circle=document.querySelector(".circle");


    circle.style.backgroundColor =`rgb(${red.value}, ${green.value}, ${blue.value})`;
}