function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var icon = document.getElementById("icon");


const bodyDOM = document.getElementsByTagName("body")[0];
const schemeDOM = document.querySelector(".switch input");
schemeDOM.addEventListener("change" , function(event){
   const thisElement = event.target;
   if(thisElement.checked){
   bodyDOM.classList.add("dark-mode");
}else{
     bodyDOM.classList.remove("dark-mode");
     }
});