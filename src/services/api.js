const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/category/women's clothing`);
  const womenClothing = await response.json();

  const responseMen = await fetch(`${API_URL}/category/men's clothing`);
  const menClothing = await responseMen.json();

  return [...womenClothing, ...menClothing];
};
