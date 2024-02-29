document.querySelector("#menu-icon").addEventListener("click", () => {
    document.querySelector("#menu-icon").classList.remove("active");
    document.querySelector("#close-icon").classList.add("active");
    document.querySelector("#navbar").classList.add("active");
  });
  
  document.querySelector("#close-icon").addEventListener("click", () => {
    document.querySelector("#close-icon").classList.remove("active");
    document.querySelector("#menu-icon").classList.add("active");
    document.querySelector("#navbar").classList.remove("active");
  });
  
 let navigation_items=  document.querySelectorAll(".navbtn");

 function activator(index){
    navigation_items.forEach((item) => {
        item.classList.remove("active");
    })

    navigation_items[index].classList.add("active");
 }

  navigation_items.forEach((item,i) => {
    item.addEventListener("click",()=>{
        activator(i);
    })
  })