import Menu_15 from './components/Menu_15';
import items from './data';
import { useState } from 'react';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Menu_15 items={menuItems} />
      </section>
    </main>
  );
}

export default App;
