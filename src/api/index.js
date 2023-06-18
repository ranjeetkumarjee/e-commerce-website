// import { API_URL, LOCALSTORAGE_TOKEN_KEY } from '../utils';

// const CustomFetch = async (url, { body, ...customoCnfig }) => {
//   const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

//   const headers = {
//     'content-type': 'application/json',
//     Accept: 'application/json',
//   };

//   if (token) {
//     headers.Authorization = `Bearer${token}`;
//   }

//   const Config = {
//     ...customConfig,
//     headers: {
//       ...headers,
//       ...customConfig.headers,
//     },
//   };

//   if (body) {
//     config.body = JSON.stringify(body);
//   }

//   try {
//     const response = await fetch(url, config);
//     const data = await response.json();

//     if (data.success) {
//       return {
//         data: data.data,
//         success: true,
//       };
//     }

//     throw new Error(data.message);
//   } catch (err) {
//     console.error('Error', err);
//     return {
//       message: err.message,
//       success: false,
//     };
//   }
// };

// export const getProducts = () => {
//   return CustomFetch(API_URL.Products(), {
//     method: 'GET',
//   });
// };
