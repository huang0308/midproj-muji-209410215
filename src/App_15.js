import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header_15 from './components/crown_15/Header_15';
import Homepage_15 from './pages/crown_15/Homepage_15';
import ShopOverviewPage_15 from './pages/crown_15/ShopOverviewPage_15';
import ContactPage_15 from './pages/crown_15/ContactPage_15';
import SigninPage_15 from './pages/crown_15/SigninPage_15';
import ProductsPage_15 from './pages/crown_15/ProductsPage_15';
import ShopPage_15 from './pages/crown_15/ShopPage_15';

import MenuPage_15 from './pages/menu_15/MenuPage_15';
import './App_15.scss';

function App_15() {
  return (
    <div>
      <Header_15 />
      <Switch>
        <Route exact path='/' component={Homepage_15} />
        <Route exact path='/shop_15' component={ShopOverviewPage_15} />
        <Route exact path='/contact_15' component={ContactPage_15} />
        <Route exact path='/signin_15' component={SigninPage_15} />
        <Route exact path='/menu_15' component={MenuPage_15} />
        <Route exact path='/api_15/shop_15' component={ShopPage_15} />
        <Route
          exact
          path='/api_15/shop_15/:category'
          component={ProductsPage_15}
        />
      </Switch>
    </div>
  );
}

export default App_15;
