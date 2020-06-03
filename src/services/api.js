import slug from 'slug';

import { store } from '../store';
import { storeProducts } from '../store/modules/products/actions';

const url = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog';

const productId = (product) => {
  const [size] = product.sizes;
  const index = size.sku.indexOf(size.size);

  return size.sku.substring(0, index - 1);
};

const productSlug = (product) => {
  const id = productId(product);
  const { name } = product;
  return slug(`${id}-${name}`);
};

const loadData = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return data.map((product, index) => ({
    ...product,
    id: productId(product),
    image_url: product.image,
    price: parseFloat(
      product.actual_price.replace(/[^0-9,]/g, '').replace(',', '.')
    ),
    slug: productSlug(product),
  }));
};

export default async () => {
  const state = store.getState();
  let { products } = state;
  if (products?.length > 0) {
    return products;
  }
  products = await loadData();
  store.dispatch(storeProducts(products));
  return products;
};
