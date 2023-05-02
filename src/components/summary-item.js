import React from 'react';

export default function SummaryItem({ category, score, icon }) {
  console.log(score);
  return (
    <div className={'summary-item ' + category.toLowerCase()}>
      <div className="info">
        <img src={icon} alt={category} className="icon" />
        <span className="category">{category}</span>
      </div>
      <div className="score">
        <span className="actual-score">{score} </span>
        <span className="slash-hundred">/ 100</span>
      </div>
    </div>
  );
}
