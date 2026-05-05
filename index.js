let countEl = document.getElementById("le-count")
let incrementBtn = document.getElementById("increment-btn")
let saveEl = document.getElementById("save-el")
let saveBtn = document.getElementById("save-btn")

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



