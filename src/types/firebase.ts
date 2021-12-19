export interface IGoodsData {
  category: string;
  hoverImg?: string;
  img: string;
  price: number;
  sale: boolean;
  title: string;
}

export interface IPriceFilter {
  min: string;
  max: string;
  sale: boolean;
}
