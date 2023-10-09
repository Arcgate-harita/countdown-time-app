import React from 'react';


const Wish = ({ name }) => {

  const formattedName = name ? name.toUpperCase() : '';

  return (
    <div className='wish-message'>
      CONGRATULATIONS <span className='highlight'>{formattedName}</span> !!!
    </div>
  );
};

export default Wish;
