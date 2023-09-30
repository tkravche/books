const nav = document.querySelector('.nav');

nav.addEventListener('click', setCurrent)

function setCurrent(e){
    if(e.target.classList.contains)

}
  homePg.classList.add('current__page');
} else if (currentPath === '/shopping-list.html') {
  shopList.classList.add('current__page');
  homePg.classList.remove('current__page');
}

const auth = getAuth();
