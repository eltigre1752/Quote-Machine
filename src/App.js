
import React, { useState, useEffect } from 'react';
import './App.css';
import colorsArray from './colorsArray.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



const quoteAPI = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json" 
function App() {
  const [quote, setQuote] = useState("Life isn’t about getting and having, it’s about giving and being.");
  const [author, setAuthor] = useState("Kevin Kruse");
  const [index, setIndex] = useState(0);
  const [quoteArr, setQuoteArr] = useState(null);
  const [bgColor, setBgColor] = useState('red');

  const fetchQuotes = async () => {
    const respond = await fetch(quoteAPI);
    const result = await respond.json();
    setQuoteArr(result.quotes); 
  }

  useEffect(() => {
    fetchQuotes();
  },[])

  const generateRandom = () => {
    const randomIndex = Math.floor(Math.random() * quoteArr.length);
    const colorIndex = Math.floor(Math.random() * colorsArray.length);
    setIndex(randomIndex);
    setAuthor(quoteArr[index].author);
    setQuote(quoteArr[index].quote);
    setBgColor(colorsArray[colorIndex]);
  }
  
  return (
    <div className="App">
      <div className="wrapper" 
           style={{backgroundColor: bgColor, color: bgColor}}>
        <div id="quote-box">
          <p id="text">
          <FontAwesomeIcon icon={faQuoteLeft} /> {quote}
          </p>
          <p id="author">
            - {author}
          </p>
          <a  style={{backgroundColor: bgColor}} 
              id="tweet-quote" className="btn" 
              href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a  style={{backgroundColor: bgColor}} 
              id="tweet-quote" className="btn" 
              href={encodeURI(`https://www.tumblr.com/?text=${quote} -${author}`)}>
            <FontAwesomeIcon icon={faTumblr} />
          </a>
          <button style={{backgroundColor: bgColor}} id="new-quote" 
                  className="btn" onClick = {() => generateRandom()}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
