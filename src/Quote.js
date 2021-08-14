import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


function Quote (props) {
    const {bgColor, quote, author, handleClick} = props;
    return(
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
                  className="btn" onClick = {() => handleClick()}>
            New Quote
          </button>
        </div>
      </div>
    )
}

export default Quote;