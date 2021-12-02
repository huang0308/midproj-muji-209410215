import React from 'react';
import Menu_15 from '../../components/menu_15/Menu_15'
import Category_15 from '../../components/menu_15/Category_15'
import items from './data'
import { useState } from 'react';
import './MenuPage_15.scss';

const allCategories = [`all`, ...new Set(items.map( item => item.category))] 
console.log('allCategories', allCategories)

function MenuPage_15() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems); 
    }
  }

  return (
    <div>
           <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category_15 categories={categories} filterItems={filterItems}/>
        <Menu_15 items={menuItems} />
      </section>
    </main>
    </div>
  );
}

export default MenuPage_15;