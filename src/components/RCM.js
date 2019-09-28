import React from "react";
import axios from "axios";

class RCM extends React.Component{
  state = {
    quote : "I attribute my success to this: I never gave or took any excuse.",
    author: "Rlorence Nightingale"
  }
  color1 = Math.floor(Math.random() * 255);
  color2 = Math.floor(Math.random() * 255)
  color3 = Math.floor(Math.random() * 255)
  
  changeQuote = () => { 
 
  this.color1 = Math.floor(Math.random() * 255);
  this.color2 = Math.floor(Math.random() * 255);
  this.color3 = Math.floor(Math.random() * 255); 
  axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(res => {
         let {quote, author} = res.data.quotes[Math.floor(Math.random() * 100)];
      this.setState({quote, author});    
    }
    ).catch(err => console.log(err));
  }

  render(){
    console.log(this.state.quote);
    return (
      <div id="quote-box" className="RCM" style={{backgroundColor:`rgba(${this.color1},${this.color2},${this.color3},0.8)`}}>
        <div className="RCM__container">
          <div className="RCM__quote u-margin-bottom-big"
            style={{color:`rgba(${this.color1},${this.color2},${this.color3},0.8)`}}
            >
            <h1 id="text" className="actual-quote">{this.state.quote} </h1>
            <h3 id="author" style={{float: "right", marginTop: "5px"}}>-- {this.state.author}</h3>
          </div>
          <div className="RCM__button-box">
            <div className="button-box">
              <a id="tweet-quote" href="http://www.twitter.com/intent/tweet" target="_blank">
                <i class="fa fa-twitter" style={{backgroundColor:`rgba(${this.color1},${this.color2},${this.color3},0.8)`}}></i>
              </a>
            </div>
            <div className="button-box">
              <a id="new-quote"
                href="#"  onClick={this.changeQuote}>
                <i class="fa fa-play" style={{backgroundColor:`rgba(${this.color1},${this.color2},${this.color3},0.8)`}}></i>
              </a> 
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default RCM;