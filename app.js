//=>უნდა დავიჭიროთ ის ელემენტები, რომლებზეც გვინდა მანიპულირება
let title=document.querySelector("span");
let paragraph=document.querySelector("p");

//=>უნდა დავწეროთ ფუნქციები ღილაკებისთვის

let count=0;

function incrementNum(){
   count++;
    title.textContent=count;
}

function decrementNum(){
    count--;
    title.textContent=count;
}

function saveNum(){
    let save=count+" - ";
    paragraph.textContent+=save;
}
function clearNum(){
    count=0;
    title.textContent=count;
}