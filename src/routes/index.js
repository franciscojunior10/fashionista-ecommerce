import React from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Product from '../pages/Product';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:slug" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
