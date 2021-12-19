import {getGoodsFirebase} from "@/lib/services";
import renderGoods from "@/modules/renderGoods";
import {Database} from "firebase/database";


const loadData = (database: Database) => {
  getGoodsFirebase(database)
    .then((snapshot) => {
      if (snapshot.exists()) {
        renderGoods(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
};

export default loadData;
