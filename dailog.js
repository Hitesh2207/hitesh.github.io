const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener("click", () => {
            nav.classList.add('active');
        })


if (close) {
    close.addEventListener("click", () => {
            nav.classList.remove('active');
        })
}

}

/*const btn_toggle=document.querySelector('.btn toggle');
const sidebar-document.querySelector('.sidebar');
const logo document.querySelector('.logo');
const wrapper document.querySelector('.wrapper');

btn_toggle.addEventListener("click",(→I
    sidebar.classtist.toggle("active");
    if(sidebar.classList.contains('active')){
        logo.setAttribute("style","display:flex");
       wrapper.setAttribute("style","left:240px;width:calc
        (100%-240px)");
        return
   }
    logo.setAttribute("style","display:none");
   wrapper.setAttribute("style","left:85px");*/