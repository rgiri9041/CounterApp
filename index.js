let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count  += 1
    countEl.innerText = count
}
incrementBtn.addEventListener("click", increment)

function save(){
    let countStr = count + " - " 
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0

  }
saveBtn.addEventListener("click", save)



