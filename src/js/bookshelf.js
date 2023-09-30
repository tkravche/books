import { getBestSellers, getBooksByCategory } from './booksAPI-service';
import { refs } from './refs';

const contentTitle = refs.bookshelfTitle;

function createBookshelfMarkup(bestsellers) {
  return bestsellers
    .map(
      ({ list_name, books }) => `
    <li class="bookshelf-item">
    <h3 class="bookshelf-category">${list_name}</h3>
    <ul class="bookshelf-books">${books
      .map(
        ({ _id, book_image, title, author }) =>
          `<li class="bookshelf-book" id="${_id}">
                <div class="overlay-container">
        <img src="${book_image}" alt="${title}" width="180"
        height="256" data-img-id="${_id}" loading="lazy" class="book-img">
        <div class="overlay">
    <div class="overlay-text">Quick view</div>
  </div>
  </div>
        <div class="book-info"><p class="book-title">${title}</p>
        <p class="book-author">${author}</p></div></li>`
      )
      .join('')}</ul>
    <button class="see-more-btn" data-category="${list_name}">See More</button>
     </li>`
    )
    .join('');
}

function renderCategoriesList(bestsellers) {
  refs.categoryBookshelf.innerHTML = createBookshelfMarkup(bestsellers);
}

// Best Sellers on first load
getBestSellers().then(data => {
  renderCategoriesList(data);
});

function createBooksByCategoryMarkup(bookslist) {
  return (
    bookslist
      .map(
        book => `<li class="bookshelf-book" id="${book._id}" data-category="${book.list_name}">
        <div class="overlay-container">
<img src="${book.book_image}" alt="${book.title}" width="180"
height="256" data-img-id="${book._id}" loading="lazy" class="book-img">
<div class="overlay">
<div class="overlay-text">Quick view</div>
</div>
</div>
<div class="book-info"><p class="book-title">${book.title}</p><p class="book-author">${book.author}</p></div></li>`
      )
      .join('') +
    `<div><button class="all-categories-btn">All Categories</button></div>`
  );
}

function renderBooksByCategory(bookslist) {
  refs.categoryBookshelf.innerHTML = createBooksByCategoryMarkup(bookslist);
  refs.categoryBookshelf.classList.add('clicked-category');
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function currentCategoryToggle(category) {
  document.querySelector('.current').classList.remove(`current`);
  document
    .querySelector(`li[data-category="${category}"]`)
    .classList.add(`current`);
}

// Category
refs.categoriesList.addEventListener('click', e => {
  if (e.target.classList.contains('category-item')) {
    const category = e.target.dataset.category;
    const accentedCategory = category.split(' ');
    const notAccentedCategory = accentedCategory
      .slice(0, accentedCategory.length - 1)
      .join(' ');
    const lastAccentedCategory = accentedCategory.slice(
      accentedCategory.length - 1
    );
    getBooksByCategory(category).then(data => {
      renderBooksByCategory(data);
      currentCategoryToggle(category);
      contentTitle.innerHTML = `<span class="bookshelf-title">${notAccentedCategory}</span><span class="bookshelf-title-accent"> ${lastAccentedCategory}</span>`;
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});

// "See more" Button
refs.categoryBookshelf.addEventListener('click', e => {
  if (e.target.classList.contains('see-more-btn')) {
    const category = e.target.dataset.category;
    const accentedCategory = category.split(' ');
    const notAccentedCategory = accentedCategory
      .slice(0, accentedCategory.length - 1)
      .join(' ');
    const lastAccentedCategory = accentedCategory.slice(
      accentedCategory.length - 1
    );
    getBooksByCategory(category).then(data => {
      renderBooksByCategory(data);
      currentCategoryToggle(category);
      contentTitle.innerHTML = `<span class="bookshelf-title">${notAccentedCategory}</span><span class="bookshelf-title-accent"> ${lastAccentedCategory}</span>`;
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});

// "All categories" Button
refs.categoryBookshelf.addEventListener('click', e => {
  if (e.target.classList.contains('all-categories-btn')) {
    getBestSellers().then(data => {
      renderCategoriesList(data);
      document.querySelector('.current').classList.remove(`current`);
      refs.allCategories.classList.add(`current`);
      contentTitle.innerHTML = `<h2 class="bookshelf-title">
      Best Sellers <span class="bookshelf-title-accent">Books</span>
    </h2>`;
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});

// "All categories" from the Categories List
refs.allCategories.addEventListener('click', e => {
  getBestSellers().then(data => {
    renderCategoriesList(data);
    contentTitle.innerHTML = `<h2 class="bookshelf-title">
  Best Sellers <span class="bookshelf-title-accent">Books</span>
</h2>`;
    document.querySelector('.current').classList.remove(`current`);
    refs.allCategories.classList.add(`current`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
