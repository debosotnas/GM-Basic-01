import React from 'react';
import './HistoryCard.css';

function getPreWidth(imgPre) {
  const countChar = imgPre.split('\n').reduce((prev, curr) => {
    return prev > curr.length ? prev : curr.length;
  }, 0);
  return `${countChar * 5.77777 + 10}px`;
}

export default function HistoryCard(props) {
  return (
    <div className="history-card-body">
      {props.title && <h4>{props.title}</h4>}
      <div
        style={{ width: getPreWidth(props.image) }}
        className="pre-icon pre-wide"
      >
        <pre>{props.image}</pre>
      </div>
      {props.description && (
        <p className="desc">
          <span></span>
          {props.description}
        </p>
      )}
    </div>
  );
}
