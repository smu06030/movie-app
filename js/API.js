import config from './config.js';

const { API_KEY } = config;
const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_LANG = 'ko-KR';
const url = `${BASE_URL}/movie/top_rated?language=${BASE_LANG}&page=${1}`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ API_KEY }`
  }
};


const getTopLated = async () => {
  try{
    const response = await fetch(url, options);
    const json = await response.json();

    return json;
  } catch (err) {
    console.error(err)
  }
}

export { getTopLated }