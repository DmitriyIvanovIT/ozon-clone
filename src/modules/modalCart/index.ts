const openModal = (selector: HTMLElement): void => {
  selector.classList.add('active');
};

const closeModal = (selector: HTMLElement): void => {
  selector.classList.remove('active');
};

const modalCart = (): void => {
  const cartBtn = document.getElementById('cart') as HTMLElement,
    cartModal = document.querySelector('.cart') as HTMLElement;

  cartBtn.addEventListener('click', () => openModal(cartModal));
  cartModal.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('cart') || target.classList.contains('cart-close')) {
      closeModal(cartModal);
    }
  })
};

export default modalCart;
