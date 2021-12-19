import { IGoodsData } from "@/types/firebase";
import cardControls from "@/modules/cardControls";
import createCard from "@/modules/createCard";

const renderGoods = (data: IGoodsData[]) => {
  const goodsBlock = document.querySelector('.goods') as HTMLElement;

  goodsBlock.textContent = '';

  if (data.length === 0) {
    goodsBlock.innerHTML = '<h1>По вашему запросу ничего не найдено!</h1>';

    return;
  }

  data.forEach((good) => goodsBlock.append(createCard(good)));

  cardControls();
};

export default renderGoods;
