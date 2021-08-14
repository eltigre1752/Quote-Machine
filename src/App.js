import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import colorsArray from './Data/colorsArray.js';
import Quote from './Quote';


const quoteAPI = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json" 
const myStatement = 'Hi this is my Random quote machine, to start making new quote press "New Quote"';
const myName = 'Tran Hong Van';

function App() {
  const [quote, setQuote] = useState(myStatement);
  const [author, setAuthor] = useState(myName);
  const [quoteArr, setQuoteArr] = useState(null);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    fetch(quoteAPI)
      .then(respond => respond.json())
      .then((result) => setQuoteArr(result.quotes))
  }, [])

  useEffect(() => {
    setBgColor(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
  }, [quote])

  
  const generateRandom = () => {
    const randomIndex = Math.floor(Math.random() * quoteArr.length);
    setAuthor(quoteArr[randomIndex].author);
    setQuote(quoteArr[randomIndex].quote);
  }
  
  return (
    <div className="App">
      <Quote 
        bgColor={bgColor} 
        quote={quote} 
        author={author} 
        handleClick={generateRandom}
      />
    </div>
  );
}

export default App;
