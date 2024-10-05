// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="app">
      <div className="card">
        <p>{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote</button>
      </div>
      <div className="saved-quotes">
        <h3>Saved Quotes</h3>
        <ul>
          {savedQuotes.map((savedQuote, index) => (
            <li key={index}>{savedQuote}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RandomQuote;
