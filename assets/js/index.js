const searchBtn =document.querySelector(".search-btn");
const searchBar= document.querySelector(".search-bar");
const cancelBtn= document.querySelector(".cancel-btn");
const searchIn= document.querySelector("input");
searchBtn.onclick=()=>{
    searchBar.classList.add("bar-active");
    searchIn.classList.add("in-active");
    searchBtn.classList.add('btn-active');
    cancelBtn.classList.add('cancel-active');
}
cancelBtn.onclick=()=>{
    searchBar.classList.remove("bar-active");
    searchIn.classList.remove("in-active");
    searchBtn.classList.remove('btn-active');
    cancelBtn.classList.remove('cancel-active');
}

window.addEventListener('scroll', function () {
    var header = document.querySelector('.nav-main');
    header.classList.toggle('sticky', window.scrollY > 0);
})

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('ractive');
        }
        else {
            reveals[i].classList.remove('ractive');
        }
    }
}

var nav_item = document.querySelector('.nav-item');
var bar = document.getElementById('bar');

nav_item.style.right = '-670px';
const mediaQuery = window.matchMedia('(max-width: 479px)')

if (mediaQuery.matches) {
    nav_item.style.right = '-670px';
}
bar.onclick = function () {
    if (nav_item.style.right == '-670px') {
        nav_item.style.right = '6px';
    }
    else {
        nav_item.style.right = '-670px';
    }
}