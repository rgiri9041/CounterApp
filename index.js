let countEl = document.getElementById("le-count")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")

let count = 0

function increment(){
    count  = count + 1
    countEl.innerText = count
}
incrementBtn.addEventListener("click", increment)

function save(){
    saveBtn.innerText = count
 }
saveBtn.addEventListener("click", save)



