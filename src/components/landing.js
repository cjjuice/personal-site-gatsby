import React from 'react'
import { VelocityComponent } from 'velocity-react'

class Landing extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product: "apps."
    }
  }

  componentDidMount () {
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
        <VelocityComponent animation={{opacity: 1}} runOnMount={true} easing='easeOutExpo' delay={100}>
          <div className="inner-container">
            <img src={this.props.logo_url} alt="CJ Bordeleau" />
            <h1>I develop world class {this.state.product}<span className="blinking-cursor">|</span></h1>
          </div>
        </VelocityComponent>
        <VelocityComponent animation={{opacity: 1}} runOnMount={true} easing='easeOutExpo' delay={800}>
          <div className="bottom-arrow">
            <img src={this.props.arrow_url} alt="V" />
          </div>
        </VelocityComponent>
      </section>
    );
  }
}

export default Landing
