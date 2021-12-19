const cardListeners = (card: HTMLElement) => {
  const cardImgTop = card.querySelector('.card-img-top') as HTMLElement,
    cardButton = card.querySelector('.btn-primary') as HTMLElement;

  const toggleImg = () => {
    const imgLink = cardImgTop.dataset.img,
    hoverLink = cardImgTop.dataset.hover;

    cardImgTop.style.backgroundImage = `url(${hoverLink})`;

    cardImgTop.dataset.img = hoverLink;
    cardImgTop.dataset.hover = imgLink;
  }

  cardImgTop.addEventListener('mouseover', () => {
    if (cardImgTop.dataset.hover) {
      toggleImg();
    }
  });

  cardImgTop.addEventListener('mouseleave', () => {
    if (cardImgTop.dataset.hover) {
      toggleImg();
    }
  });

  cardButton.addEventListener('click', () => {
    console.log(1);
  })
};

export default cardListeners;
