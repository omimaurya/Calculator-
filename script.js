
const btn = document.querySelectorAll("button")
const numDisplay = document.querySelector("input")

let btnArray = Array.from(btn)     //  console.log(btnArray)  return value in array
let str = " "
btnArray.forEach((btnElement) => {
    btnElement.addEventListener("click", (e) => {
        console.log(e.target.innerText)


        if (e.target.innerText == "=") {
            str = eval(str)
            numDisplay.value = str;


        } else if (e.target.innerText == "AC") {
            str = " "
            numDisplay.value = str;
        } else if (e.target.innerText == "DEL") {
            str = str.substring(0, str.length - 1)
            numDisplay.value = str;
        }
        else {
            str = str + e.target.innerText
            numDisplay.value = str
        }

    })
})

