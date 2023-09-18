var selectField= document.getElementById("selectField");
var selectText= document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowIcon=document.getElementById("arrowIcon");

selectField.onclick = function(){
   list.classList.toggle("hide");
   alert("asd")
     arrowIcon.classList.toggle("rotate");
}

for(option of options){
    option.onclick= function(){
        caches
        selectText.innerHTML = this.textContent
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
}