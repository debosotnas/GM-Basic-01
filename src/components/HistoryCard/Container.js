import React from 'react';
import HistoryCardList from './List';
import { HISTORY_DATA } from '../../assets/data/chars';

export default function HistoryCardContainer() {
  return (
    <div>
      <HistoryCardList data={HISTORY_DATA}></HistoryCardList>
    </div>
  );
}
