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
