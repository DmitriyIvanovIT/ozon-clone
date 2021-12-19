import {Database} from "firebase/database";
import {IPriceFilter} from "@/types/firebase";
import {catalogFilter, getGoodsFirebase, priceFilter} from "@/lib/services";
import renderGoods from "@/modules/renderGoods";

const filters = (database: Database) => {
  const minInput = document.getElementById('min') as HTMLInputElement,
    maxInput = document.getElementById('max') as HTMLInputElement,
    filterCheck = document.getElementById('discount-checkbox') as HTMLInputElement,
    filterCheckCheckmark = document.querySelector('.filter-check_checkmark') as HTMLElement
  ;

  const param: IPriceFilter = {
    min: '0',
    max: '999999999',
    sale: false
  }

  const handledFilter = (param: IPriceFilter) => {
    getGoodsFirebase(database)
      .then((snapshot) => {
        if (snapshot.exists()) {
          renderGoods(priceFilter(snapshot.val(), param));
        } else {
          console.log("No data available");
        }
      });
  };

  filterCheck.addEventListener('change', () => {
    if (filterCheck.checked) {
      filterCheckCheckmark.classList.add('checked');
    } else {
      filterCheckCheckmark.classList.remove('checked');
    }

    param.sale = filterCheck.checked;

    handledFilter(param);
  });

  minInput.addEventListener('input', (e) => {
    const value = (e.target as HTMLInputElement).value;

    param.min = value !== '' ? value : '0';

    handledFilter(param);
  });

  maxInput.addEventListener('input', (e) => {
    const value = (e.target as HTMLInputElement).value;

    param.max = value !== '' ? Number(param.min) < Number(value) ? value : '999999999'  : '999999999';

    handledFilter(param);
  });

};

export default filters;
