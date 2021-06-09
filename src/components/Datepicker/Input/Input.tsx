import React, { HTMLProps } from 'react';
import './Input.scss';

const Input: React.FC<HTMLProps<HTMLInputElement>> = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <input className='ui__input' {...props} />
  );
};

export default Input;
