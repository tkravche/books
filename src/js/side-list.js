import { getAllCategoriesList} from './booksAPI-service';
import { refs } from './refs';

function createCategoriesListMarkup(categories) {
  return categories
    .map(
      category => `<li class="category-item" data-category="${category.list_name}">
    ${category.list_name}</li>`
    )
    .join('');
}

function renderCategoriesList(categoriesList) {
  refs.categoriesList.innerHTML = createCategoriesListMarkup(categoriesList);
}

getAllCategoriesList().then(data => {
  renderCategoriesList(data);
  });

