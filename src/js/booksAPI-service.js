import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

export async function getAllCategoriesList() {
  try {
    const { data } = await axios('/category-list');
    return data;
  } catch (error) {
    alert(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
}

export async function getBestSellers() {
  try {
    const { data } = await axios('/top-books');
    return data;
  } catch (error) {
    alert(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
}

export async function getBooksByCategory(category) {
  try {
    const { data } = await axios('/category?', {
      params: {
        category,
      },
    });
    return data;
  } catch (error) {
    alert(
      `Oops! Something went wrong. You caught the following error: ${error.message}.`
    );
  }
}

export async function getBookById(id) {
    try {
      const { data } = await axios(`/${id}`);
      return data;
    } catch (error) {
      alert(
        `Oops! Something went wrong. You caught the following error: ${error.message}.`
      );
    }
  }