import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShopPage_15.scss';
import Product_15 from '../components/crown_15/Product_15';

const ShopPage_15 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchShop = async () => {
      const HEROKU_URL = `https://crown1101.herokuapp.com/api_15/shop_15`;
      const LOCAL_URL = `/api_15/shop_15`;
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_15/shop_15', data);
      setProducts(data);
    };
    fetchShop();
  }, []);

  return (
    <div>
      <div className='shop-page'>
        <div className='collection-page'>
          <h1 className='title'>Shop Products</h1>
          <div className='items'>
            {products.map((item) => {
              const { id, name, price, remote_url } = item;
              return (
                <Product_15
                  key={id}
                  name={name}
                  price={price}
                  remote_url={remote_url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage_15;
