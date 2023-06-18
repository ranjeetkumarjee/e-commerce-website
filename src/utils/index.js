const API_ROOT = 'https://fakestoreapi.com';

export const API_URL = {
  Products: () => `${API_ROOT}/products`,
  oneProductDetails: (ID) => `${API_ROOT}/products/${ID}`,
};

export const LOCALSTORAGE_TOKEN_KEY = '_CODIAL';
