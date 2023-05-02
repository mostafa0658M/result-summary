import React from 'react';
import './style.css';
import ResultSummary from './components/result-summary';
import data from './data.json';

export default function App() {
  return (
    <div className="wrapper">
      <ResultSummary summary={data} />
    </div>
  );
}
