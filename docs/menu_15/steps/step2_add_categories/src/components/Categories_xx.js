import React from 'react';

const Categories_15 = ({ categories }) => {
  console.log('categories', categories);
  return (
    <div>
      <div className='btn-container'>
        {categories.map((category, index) => {
          return (
            <button key={index} type='button' className='filter-btn'>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories_15;
