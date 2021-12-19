import cardListeners from "@/modules/cardListeners";

const cardControls = (): void => {
  const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;

  cards.forEach((card) => cardListeners(card));
};

export default cardControls;
