import React from 'react';
import './MenuItem_15.scss';

const MenuItem_15 = ({ name, remote_url, link_url, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <img className='background-image' src={remote_url} alt='' />
      <a href={`/api_15${link_url}`} className='content'>
        <h1 className='title'>{name}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </a>
    </div>
  );
};

export default MenuItem_15;
