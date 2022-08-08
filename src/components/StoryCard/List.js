import React, { useState } from 'react';
import StoryCard from './Card';

export default function StoryCardList({ data }) {
  const [currCard, setCurrCard] = useState(0);

  const loadNextCurrCard = (currIndex) => {
    if (currIndex < data.length - 1) {
      setCurrCard(currIndex + 1);
    }
  };

  const loadPrevCurrCard = (currIndex) => {
    if (currIndex > 0) {
      setCurrCard(currIndex - 1);
    }
  };

  return (
    <div>
      {data.map((page, index) => {
        return (
          <div
            key={page.id}
            className={`history-card ${index !== currCard ? 'hide-card' : ''}`}
          >
            <div
              className={`arrow left ${index <= 0 ? 'hide-arrow' : ''}`}
              onClick={() => {
                loadPrevCurrCard(index);
              }}
            >
              &lt;
            </div>
            <StoryCard {...page} />
            <div
              className={`arrow right ${
                index + 1 >= data.length ? 'hide-arrow' : ''
              }`}
              onClick={() => {
                loadNextCurrCard(index);
              }}
            >
              &gt;
            </div>
          </div>
        );
      })}
    </div>
  );
}
