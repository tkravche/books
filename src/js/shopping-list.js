import { refs } from './refs';
import { getBookById } from './booksAPI-service';
import dumpSvg from '../images/icons/sprite.svg';
import amazonImg1 from '../images/amazon1.png';
import amazonImg2 from '../images/amazon2.png';
import amazonImg3 from '../images/amazon3.png';
import appleShopImg1 from '../images/apple1.png';
import appleShopImg2 from '../images/apple2.png';
import appleShopImg3 from '../images/apple3.png';
import bookShopImg1 from '../images/bookshop1.png';
import bookShopImg2 from '../images/bookshop2.png';
import bookShopImg3 from '../images/bookshop3.png';
import books from '../images/books1.png';

const shoppingBookIdsList = JSON.parse(localStorage.getItem('shoppingList'));

function createShoppingListMarkup({
  _id,
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  return `<li data-id = ${_id}><div class="shopping-list-bookinfo-wrapper">
  <button class="delete-book-btn js-dump-btn" aria-label="Delete added book">
    <svg class="js-dump-btn" width="34" height="34">
      <use class="js-dump-btn" href="${dumpSvg}#icon-dump"></use>
    </svg>
  </button>
  <div class="shopping-list-info-wrapper">
    <img
      class="shopping-list-book-image"
      src="${book_image}"
      alt="cover"
      width="192"
      height="281"
    />
    <div class="shopping-list-text-content">
        <div class="another-wrapper">
      <h2 class="shopping-list-book_title">${title}</h2>
      <h3 class="shopping-list-book_category">${list_name}</h3>
      <p class="shopping-list-description">${description}</p>
    </div>
      <div class="author-links-wrapper">
        <h3 class="shopping-list-author">${author}</h3>
        <ul class="shopping-list-links-container">
          <li>
            <a
              href="${buy_links[0].url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="shopping-list-links-icon"
            >
              <img
                src="${amazonImg1}"
                srcset="${amazonImg2} 2x, ${amazonImg3} 3x"
                alt="Logo of shop"
                width="62"
              />
            </a>
          </li>
          <li>
            <a
              href="${buy_links[1].url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="shopping-list-links-icon"
            >
              <img
                src="${appleShopImg1}"
                srcset="${appleShopImg2} 2x, ${appleShopImg3} 3x"
                alt="Logo of shop"
                width="33"
              />
            </a>
          </li>
          <li>
            <a
              href="${buy_links[2].url}"
              target="blank"
              rel="nofollow noopener noreferrer"
              aria-label="Link to shop"
              class="shopping-list-links-icon"
            >
              <img
                src="${bookShopImg1}"
                srcset="${bookShopImg2} 2x, ${bookShopImg3} 3x"
                alt="Logo of shop"
                width="30"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div></li>`;
}

function populateShoppingList(ids) {
  ids.map(id =>
    getBookById(id).then(data => {
      refs.shoppingList.insertAdjacentHTML(
        'beforeend',
        createShoppingListMarkup(data)
      );
    })
  );
}

function showEmptyShoppingListMessage() {
  refs.shoppingListEmpty.innerHTML = `
    <p class="shopping-list-empty-info">
      This page is empty, add some books and proceed to order.
    </p>
    <img class="shopping-list-empty-bg" src="${books}" alt="books" />
  `;
}

if (shoppingBookIdsList === null || shoppingBookIdsList.length === 0) {
  showEmptyShoppingListMessage();
} else populateShoppingList(shoppingBookIdsList);

function deleteShoppingListItem(e) {
  if (e.target.classList.contains('js-dump-btn')) {
    const bookId = e.target.closest('li').dataset.id;
    const bookIndex = shoppingBookIdsList.findIndex(id => id === bookId);
    shoppingBookIdsList.splice(bookIndex, 1);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingBookIdsList));
    refs.shoppingList.innerHTML = '';
    if (shoppingBookIdsList === null || shoppingBookIdsList.length === 0) {
      showEmptyShoppingListMessage();
    } else populateShoppingList(shoppingBookIdsList);
  }
}

refs.shoppingList.addEventListener('click', deleteShoppingListItem);
