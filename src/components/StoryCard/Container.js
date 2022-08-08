import React from 'react';
import StoryCardList from './List';
import { STORY_DATA } from '../../assets/data/chars';

export default function StoryCardContainer() {
  return (
    <div>
      <StoryCardList data={STORY_DATA}></StoryCardList>
    </div>
  );
}
