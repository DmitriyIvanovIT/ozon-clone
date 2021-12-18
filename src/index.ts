import '@/style/style.scss';
import modalCart from "@/modules/modalCart";
import {getData, getGoods} from "@/lib/services";

modalCart();

(
  async () =>
    {
      const data = await getGoods();
      console.log(data)
    }
  )();
