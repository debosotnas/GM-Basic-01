import React from 'react';
import './Box.css';

export default function Box({ children, ...rest }) {
  const className = rest.className
    ? [
        Array.isArray(rest.className)
          ? rest.className.join(' ')
          : rest.className,
        'box',
        'p-4',
        'mb-4',
      ]
    : ['box', 'p-4', 'mb-4'];
  return (
    <div {...rest} className={className.join(' ')}>
      {children}
    </div>
  );
}
