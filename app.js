//access elements

const incrementBtn=document.getElementById("increment-btn");
const decrementBtn=document.getElementById("decrement-btn");
const saveBtn=document.getElementById("save-btn");
const clearBtn=document.getElementById("clear-btn");
let title = document.querySelector("span");
let paragraph = document.querySelector("p");
let count = 0;


//functions for buttons

incrementBtn.addEventListener("click", function(){
    count++;
    title.textContent = count;
})

decrementBtn.addEventListener("click", function(){
    count--;
    title.textContent = count;
})

saveBtn.addEventListener("click", function(){
    let saveNum=count+ " - ";
    paragraph.textContent+=saveNum;
})

clearBtn.addEventListener("click", function(){
    count = 0;
    title.textContent = count;
})
