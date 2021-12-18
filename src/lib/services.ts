import axios from "@/lib/axios";

const getData = (link: string) => {
  return axios.get(link)
    .then(res => res.data)
    .catch(err => err);
};

export const getGoods = async () => await getData('/goods.json');

