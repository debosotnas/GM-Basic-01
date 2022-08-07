import React from 'react';
import './Box.css';

export default function Box({ children }) {
  return <div className="box p-4 mb-4">{children}</div>;
}
