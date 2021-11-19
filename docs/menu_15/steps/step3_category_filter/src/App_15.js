import Menu_15 from './components/Menu_15';
import items from './data';
import { useState } from 'react';

import Categories_15 from './components/Categories_15';

const allCategories = [`all`, ...new Set(items.map((item) => item.category))];
// console.log('allCategories', allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories_15 filterItems={filterItems} categories={categories} />
        <Menu_15 items={menuItems} />
      </section>
    </main>
  );
}

export default App;
