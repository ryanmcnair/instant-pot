import axios from 'axios';

const baseUrl = 'https://instantpot-1a7a1-default-rtdb.firebaseio.com/';

const getAll = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}.json`).then((response) => {
    console.log(response);
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

export default getAll;
