import {getGoodsFirebase, searchFilter} from "@/lib/services";
import renderGoods from "@/modules/renderGoods";
import {Database} from "firebase/database";

const search = (database: Database) => {
  const searchInput = document.querySelector('.search-wrapper_input') as HTMLElement;
  getGoodsFirebase(database)
    .then((snapshot) => {
      if (snapshot.exists()) {
        searchInput.addEventListener('input', (e) => {
          const value = (e.target as HTMLInputElement).value;
          renderGoods(searchFilter(snapshot.val(), value));
        });
      } else {
        console.log("No data available");
      }
    });
};

export default search;
