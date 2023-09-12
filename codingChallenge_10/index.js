var again = document.querySelector(".again");
var interval= setInterval(function () {
    again.style.marginLeft = Math.floor(Math.random() * 1000) + "px";
    again.style.marginTop = Math.floor(Math.random() * 1000) + "px";
    again.style.width = Math.floor(Math.random() * 1000) + "px";
  }, 1000);


again.addEventListener("click", ()=>{
    again.style.width = "15rem";
    again.style.marginLeft = "0px";
    again.style.marginTop = "0px";
    clearInterval(interval);
});
