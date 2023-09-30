import { refs } from './refs';
import { common } from './common';
import { getBookById } from './booksAPI-service';
import amazonImg1 from '../images/amazon1.png';
import amazonImg2 from '../images/amazon2.png';
import amazonImg3 from '../images/amazon3.png';
import appleShopImg1 from '../images/apple1.png';
import appleShopImg2 from '../images/apple2.png';
import appleShopImg3 from '../images/apple3.png';
import bookShopImg1 from '../images/bookshop1.png';
import bookShopImg2 from '../images/bookshop2.png';
import bookShopImg3 from '../images/bookshop3.png';
import closeSvg from '../images/icons/sprite.svg';



function createBookInfoMarkup({
  _id,
  book_image,
  title,
  description,
  author,
  buy_links,
}) {
  return `<div class="modal-wrapper"><button class="close-modalbtn js-close-modalbtn" aria-label="Close modal">
  <svg class="popup-about-book__close-btn-iconbtn js-close-modalbtn" width="24" height="24"><use class="js-close-modalbtn" href="${closeSvg}#icon-close"></use></svg></button>
  
  <div class='popup__wrapper'>
     <img class="popup__book-image" src="${book_image}" alt="cover" width="192" height="281">
<div class="popup__text-content">
  <h2 class="popup__book_title">${title}</h2>
  <h3 class="popup__book_author">${author}</h3>
  <p class="popup__book_description">${description}</p>
  <ul class="popup__shopping-links-container">
    <li>
      <a href="${buy_links[0].url}" target="blank" rel="nofollow noopener noreferrer" aria-label="Link to shop"
        class="popup__shopping-links-icon">
        <img src="${amazonImg1}" srcset="${amazonImg2} 2x, ${amazonImg3} 3x" alt="Logo of shop" width="62">
      </a>
    </li>
    <li>
      <a href="${buy_links[1].url}" target="blank" rel="nofollow noopener noreferrer" aria-label="Link to shop"
        class="popup__shopping-links-icon">
        <img src="${appleShopImg1}" srcset="${appleShopImg2} 2x, ${appleShopImg3} 3x" alt="Logo of shop" width="33">
      </a>
    </li>
    <li>
      <a href="${buy_links[2].url}" target="blank" rel="nofollow noopener noreferrer" aria-label="Link to shop"
        class="popup__shopping-links-icon">
        <img src="${bookShopImg1}" srcset="${bookShopImg2} 2x, ${bookShopImg3} 3x" alt="Logo of shop" width="30">
                  </a>
    </li>
  </ul>
</div>
</div>
<button type="button" data-id ="${_id}"class="add-bookBtn" >Add to shopping list</button>
</div>`;
}

{/* <p class="under-btn-text">Сongratulations! You have added the book to the shopping list. <br> To delete, press the button “Remove from the shopping list”</p> */}



function adjustShoppingListButton(bookId) {
  const shoppingIdList = JSON.parse(localStorage.getItem(common.KEY_SHOPPING))?? [];
   if (!shoppingIdList.includes(bookId)) {
    const addButton = document.querySelector('.add-bookBtn');
    addButton.textContent = 'add to the shopping list';
  } else {
    const addButton = document.querySelector('.add-bookBtn');
    addButton.textContent = 'remove from the shopping list';
  }
}

function populateModal(itemId) {
  getBookById(itemId).then(data => {
    refs.modalBookInfo.innerHTML = createBookInfoMarkup(data);
    adjustShoppingListButton(itemId);
  });
}

refs.categoryBookshelf?.addEventListener('click', e => {
  const parentElement = e.target.closest('.bookshelf-book');
    if (parentElement) {
    const bookId = parentElement.getAttribute('id');
    populateModal(bookId);
    modal.style.display = 'block';
  }
});

function closeModalHandler(e) {
  if (e.target.classList.contains('js-close-modalbtn')) {
    refs.modalBookInfo.innerHTML = '';
    modal.style.display = 'none';
  }
}

refs.modal.addEventListener('click', closeModalHandler);

// Close the modal when clicking outside of it
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    refs.modalBookInfo.innerHTML = '';
  }
});

// Event listener for the "Escape" key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
    refs.modalBookInfo.innerHTML = '';
  }
});

refs.modal.addEventListener('click', e => {
    if (e.target.classList.contains('add-bookBtn')) {
    const bookId = e.target.dataset.id;
    const shoppingIdList = JSON.parse(localStorage.getItem(common.KEY_SHOPPING))?? [];
    if (!shoppingIdList.includes(bookId)) {
      shoppingIdList.push(bookId);
      const addButton = document.querySelector('.add-bookBtn');
      addButton.textContent = 'remove from the shopping list';
      localStorage.setItem(common.KEY_SHOPPING, JSON.stringify(shoppingIdList));
    } else {
      const bookIndex = shoppingIdList.findIndex(id => id === bookId);
      shoppingIdList.splice(bookIndex, 1);
      const addButton = document.querySelector('.add-bookBtn');
      addButton.textContent = 'add to the shopping list';
      localStorage.setItem(common.KEY_SHOPPING, JSON.stringify(shoppingIdList));
    }
  }
});