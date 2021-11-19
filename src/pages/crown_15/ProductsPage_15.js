import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductsPage_15.scss';
import Product_15 from '../components/Product_15';

const ProductsPage_15 = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  console.log('category', category);
  useEffect(() => {
    const fetchProducts = async () => {
      const HEROKU_URL = `https://crown1101.herokuapp.com/api_15/shop_15`;
      const LOCAL_URL = `/api_15/shop_15`;
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_15/shop_15/:category', data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className='shop-page'>
        <div className='collection-page'>
          <h1 className='title'>{category.toUpperCase()}</h1>
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

export default ProductsPage_15;
