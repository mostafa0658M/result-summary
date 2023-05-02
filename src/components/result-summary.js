import React from 'react';
import SummaryItem from './summary-item';

export default function ResultSummary({ summary }) {
  const score = (
    summary.reduce((a, o) => {
      return a + o.score;
    }, 0) / summary.length
  ).toFixed();
  return (
    <div className="result-wrapper">
      <div className="result-side">
        <span className="title">Your Result</span>
        <div className="result-ball">
          <span className="result">{score}</span>
          <span className="full-percent">of 100</span>
        </div>
        <div className="report-wrapper">
          <span className="report-title">Great</span>
          <p className="report">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="summary-side">
        <span className="summary-title">Summary</span>
        <div className="items">
          {summary.map((params) => (
            <SummaryItem {...params} />
          ))}
        </div>
        <a href="#" className="continue-button">
          Continue
        </a>
      </div>
    </div>
  );
}
