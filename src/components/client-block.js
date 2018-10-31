import React from 'react'
import { VelocityComponent } from 'velocity-react'

class ClientBlock extends React.Component {

  constructor () {
    super()
    this.state = {hover: false}
  }

  handleMouseEnter (event) {
    this.setState({hover: true})
  }

  handleMouseLeave (event) {
    this.setState({hover: false})
  }

  render () {
    return (
      <a href={this.props.client.url} target="_blank">
        <div ref={(c) => this._input = c} onMouseEnter={this.handleMouseEnter.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} className={"client-block " + (this.props.client.box_size == "large" ? "col-md-6 large" : "col-md-3 small")}>
          <div className="back-container col-xs-12">
            <VelocityComponent animation={{scale: this.state.hover ? 1.05 : 1}} >
              <img src={this.props.client.image_path.publicURL} alt={this.props.client.name} />
            </VelocityComponent>
          </div>
          <VelocityComponent animation={{opacity: this.state.hover ? 0.7 : 0.01}} >
            <div className="overlay bg" style={{background: this.props.client.overlay_color ? this.props.client.overlay_color : "#FF4081"}} />
          </VelocityComponent>
          <VelocityComponent animation={{opacity: this.state.hover ? 1 : 0.01}} >
            <div className="overlay text">
              <h2>{this.props.client.name}</h2>
            </div>
          </VelocityComponent>
        </div>
      </a>
    );
  }
}

export default ClientBlock
