import {IGoodsData} from "@/types/firebase";

const createCard = (data: IGoodsData): HTMLElement => {
  const card = document.createElement('div');
  card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';

  card.innerHTML = `
    <div class="card">
        ${data.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
        <div class="card-img-wrapper">
            <span class="card-img-top"
                style="background-image: url('${data.img}')"
                data-img="${data.img}"
                ${data.hoverImg ? `data-hover="${data.hoverImg}"` : ''}
                ></span>
        </div>
      <div class="card-body justify-content-between">
        <div class="card-price">${data.price} ₽</div>
        <h5 class="card-title">${data.title}</h5>
        <button class="btn btn-primary">В корзину</button>
      </div>
    </div>
  `;

  return card;
};

export default createCard;
