import {child, Database, get, ref } from "firebase/database";
import {IGoodsData, IPriceFilter} from "@/types/firebase";

export const getGoodsFirebase = (database: Database) => {
  const dbRef = ref(database);
  return get(child(dbRef, 'goods'));
}

export const searchFilter = (goods: IGoodsData[], value: string): IGoodsData[] => {
  return goods.filter((item) => item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
}

export const catalogFilter = (goods: IGoodsData[], category: string): IGoodsData[] => {
  return goods.filter((item) => item.category === category);
}

export const priceFilter = (goods: IGoodsData[], param: IPriceFilter): IGoodsData[] => {
 return goods.filter((item) => {
   if (!param.sale) {
     if (item.price >= Number(param.min) && item.price <= Number(param.max)) {
       return item;
     }
   } else {
     if (item.price >= Number(param.min) && item.price <= Number(param.max) && item.sale === param.sale) {
       return item;
     }
   }
 })
}
