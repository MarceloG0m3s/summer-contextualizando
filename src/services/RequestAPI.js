import axios from 'axios';

const requestAPIFetch = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await response.json();
     return results;
    } catch(e) {
      throw new Error(e.message);
    }
  }

const axiosAPI = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
});

export const requestAPIAxios = async () => {
    try {
        const {data: { results }}  = await axiosAPI.get('/character');
        console.log('axios', results);
        return results;
    } catch(e) {
        throw new Error(e.message);
    }
}

export default requestAPIFetch;