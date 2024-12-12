const loader = document.querySelector(".loader");
const update_box = document.querySelector(".update_box");
const close_icon = document.querySelector(".close_icon");

const myTimeout = setTimeout(() => {
  loader.style.display = "none"; 
  update_box.classList.add("done");
  close_icon.addEventListener("click",function(){
    update_box.classList.add("active");   
  });
}, 3000);

function active_check(){
    const update_box = document.querySelector(".update_box.active");
    if(update_box){
        update_box.classList.remove("active");
    }
}
window.onload = active_check;

