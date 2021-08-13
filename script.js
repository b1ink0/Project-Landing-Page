const burger_1 = document.querySelector(".burger");
const burger_2 = document.querySelector(".nav_con header nav ul button");
const mobile_nav = document.querySelector(".nav_ul");
const mobile_nav_li = document.querySelectorAll('.nav_ul li')
const handle_submit = (event) => event.preventDefault();
burger_1.addEventListener("click", () => {
  if (mobile_nav.classList[1] == 'nav_close'){
  mobile_nav.classList.remove("nav_close")
  }
  mobile_nav.classList.add("nav_open")
});
burger_2.addEventListener("click", () => {
  mobile_nav.classList.remove("nav_open")
  mobile_nav.classList.add("nav_close")
});
mobile_nav_li.forEach(li => {
    li.addEventListener('click',()=>{
        mobile_nav.classList.remove("nav_open")
        mobile_nav.classList.add("nav_close")
    })
})
