import Axios, { AxiosInstance } from 'axios';

const createAxios = (): AxiosInstance => Axios.create(
  {
    baseURL: 'https://ozon-clone-default-rtdb.europe-west1.firebasedatabase.app'
  }
);

export const axios = createAxios();

export default axios;
