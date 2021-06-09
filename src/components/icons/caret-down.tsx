import React, { SVGProps } from 'react';

export default (props: SVGProps<SVGSVGElement>) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' { ...props }>
    <path d='M7 9.5L12 14.5L17 9.5L7 9.5Z' fill='currentColor'/>
  </svg>
);
