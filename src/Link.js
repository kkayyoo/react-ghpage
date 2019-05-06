import React from 'react';
import { link } from './scss/Link.module.scss';

const Button = () => {
  return (
    <>
      <a
        className={link}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        Link with CSS Module style
      </a>
    </>
  );
};
export default Button;
