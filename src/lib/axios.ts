import Axios, { AxiosInstance } from 'axios';

const createAxios = (): AxiosInstance => Axios.create();

export const axios = createAxios();

export default axios;
