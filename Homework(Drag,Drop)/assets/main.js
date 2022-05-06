let f1 = document.querySelector(".f1");
let f2 = document.querySelector(".f2");
let f3 = document.querySelector(".f3");
let f4 = document.querySelector(".f4");
let f5 = document.querySelector(".f5");
let f6= document.querySelector(".f6");
let fruit = document.querySelector(".fruit");
let dragItem;

f1.ondragstart=function(){
    dragItem = this;
}
f2.ondragstart=function(){
    dragItem = this;
}
f3.ondragstart=function(){
    dragItem = this;
}
f4.ondragstart=function(){
    dragItem = this;
}
f5.ondragstart=function(){
    dragItem = this;
}
f6.ondragstart=function(){
    dragItem = this;
}

fruit.ondragover=function(e){
    e.preventDefault();
}

fruit.ondrop=function(){
    fruit.appendChild(dragItem);
}

let v1 = document.querySelector(".v1");
let v2 = document.querySelector(".v2");
let v3 = document.querySelector(".v3");

let vegetable = document.querySelector(".vegetable");
let dragItemcopy;

v1.ondragstart=function(){
    dragItemcopy = this;
}
v2.ondragstart=function(){
    dragItemcopy = this;
}
v3.ondragstart=function(){
    dragItemcopy = this;
}


vegetable.ondragover=function(e){
    e.preventDefault();
}

vegetable.ondrop=function(){
    vegetable.appendChild(dragItemcopy);
}