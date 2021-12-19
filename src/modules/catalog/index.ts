import {Database} from "firebase/database";
import {catalogFilter, getGoodsFirebase, searchFilter} from "@/lib/services";
import renderGoods from "@/modules/renderGoods";

const catalog = (database: Database) => {
  const btnCatalog = document.querySelector('.catalog-button > button') as HTMLElement;
  const catalogModal = document.querySelector('.catalog') as HTMLElement;
  const catalogListItems = document.querySelectorAll('.catalog-list > li') as NodeListOf<HTMLElement>;

  btnCatalog.addEventListener('click', () => {
    catalogModal.classList.toggle('active');
  });

  catalogListItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {
      getGoodsFirebase(database)
        .then((snapshot) => {
          if (snapshot.exists()) {
            renderGoods(catalogFilter(snapshot.val(), listItem.textContent as string));
            catalogModal.classList.remove('active');
          } else {
            console.log("No data available");
          }
        });
    });
  });
};

export default catalog;
