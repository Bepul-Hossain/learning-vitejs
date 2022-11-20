let quickSearch = document.getElementById('quickSearch');
let quickSearchHide = document.getElementById('quickSearchHide');
let headerSearchBar = document.getElementById('headerSearchBar');
let hamburgerButton = document.getElementById('hamburgerButton');
let okoPortalen = document.getElementById('okoPortalen');

let collection = document.getElementsByClassName("button__cross");
let headerRight = document.getElementById("headerRight");

quickSearch.addEventListener('click', () => {
  headerSearchBar.style.display = 'flex';
  quickSearch.style.display = 'none';

  collection[0].style.display = 'inline';
  collection[0].style.opacity = 1;
  quickSearchHide.classList.remove('button__cross');
  headerRight.classList.add('search-bar-width');
  
  if(window.innerWidth<992){
    console.log(window.innerWidth);
    okoPortalen.classList.add('oko-portalen');
  }
})

quickSearchHide.addEventListener('click', () => {
  headerSearchBar.style.display = 'none';
  quickSearch.style.display = 'inline';

  quickSearchHide.classList.add('button__cross');
  headerRight.classList.remove('search-bar-width');
  collection[0].style.opacity = 0;
  
  setTimeout(() => {
    if(window.innerWidth<992){
      okoPortalen.classList.remove('oko-portalen')
    }
    collection[0].style.display = 'none';
  }, 450);
})

let prevScroll = window.scrollY || document.documentElement.scrollTop;
let curScroll;
let headerParent = document.getElementById('header-parent');

window.onscroll = function () {
  curScroll = window.scrollY || document.documentElement.scrollTop;
  if (curScroll > prevScroll) {
    headerParent.classList.add('hide2');
    headerParent.classList.remove('show2');
    prevScroll = curScroll;
  } else {
    headerParent.classList.add('show2');
    headerParent.classList.remove('hide2');
    prevScroll = curScroll;
  }
};

hamburgerButton.addEventListener('click', function () {
  if (quickSearch.style.display === 'none') {
    quickSearch.style.display = 'inline'
  } else {
    quickSearch.style.display = 'none'
  }

  document.querySelector('.hamburger-animated-icon').classList.toggle('open');
  document.querySelector('.hamburger-menu').classList.toggle('open');
});