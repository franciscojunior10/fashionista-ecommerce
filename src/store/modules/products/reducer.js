export default function products(state = [], action) {
  switch (action.type) {
    case 'STORE_PRODUCTS':
      return action.products;
    default:
      return state;
  }
}
