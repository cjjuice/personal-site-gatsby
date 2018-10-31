import React from 'react'

class Nav extends React.Component {
  render () {
    return (
      <div className="nav row">
        <div className="nav-inner-container col-md-12">
          <div className="logo-container col-md-3">
            <img src={this.props.logo_url} alt="CJ Bordeleau" />
          </div>
        </div>
      </div>
    );
  }
}

export default Nav
