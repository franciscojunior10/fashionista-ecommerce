import { combineReducers } from 'redux';

import cart from './cart/reducer';
import drawer from './drawer/reducer';
import products from './products/reducer';

export default combineReducers({
  cart,
  drawer,
  products,
});
