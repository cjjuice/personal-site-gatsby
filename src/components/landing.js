import React from 'react'
import * as $ from 'jquery'
let Velocity = require('velocity-animate')
let jQueryBridget = require('jquery-bridget')

jQueryBridget( 'velocity', Velocity, $ )

class Landing extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product: "apps."
    }
  }

  componentDidMount () {
    var $textDiv = $(".landing .inner-container");
    var textHeight = $textDiv.height();
    $textDiv.css({"margin-top": "-"+(textHeight/2)+"px"});
    $textDiv.velocity({opacity: 1}, {ease: "easeOutExpo"});
    $(".bottom-arrow").velocity({opacity: 1}, {ease: "easeOutExpo", delay: 1000});

    var direction = "back";
    var products = ["apps.", "websites.", "stores.", "businesses."];
    var i = 0
    var stringCounter = 0
    var outerInterval = setInterval( () => {
      var innerInterval = setInterval( () => {
        var productState = this.state.product;
        if (direction == "back") {
          this.setState({product: productState.slice(0, -1)});
          if (this.state.product.length == 0) {
            direction = "forward";
            i += 1;
          }
        } else {
          productState = products[i];
          stringCounter += 1;
          this.setState({product: productState.substr(0, stringCounter)});
          if (this.state.product.length == productState.length) {
            direction = "back";
            stringCounter = 0;
            if (products.length == i+1) {
              i = -1;
            }
            clearInterval(innerInterval);
          }
        }
      }, 75 + (Math.random()*100));
    }, 4000);
  }

  transitionText () {


  }

  render () {
    return (
      <section className="section landing row">
        <div className="inner-container">
          <img src={this.props.logo_url} alt="CJ Bordeleau" />
          <h1>I develop world class {this.state.product}<span className="blinking-cursor">|</span></h1>
        </div>
        <div className="bottom-arrow">
          <img src={this.props.arrow_url} alt="V" />
        </div>
      </section>
    );
  }
}

export default Landing
