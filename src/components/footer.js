import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <div id="footer" className="row">
        <div className="contact-details col-md-4 col-md-offset-4 col-xs-12">
          <h3>{"Got a project? Let's connect" + "."}</h3>
          <div className="social-links col-xs-12">
            <a href="mailto:cj@cj.gg" target="_blank">
              email
            </a>
            <a href="https://www.instagram.com/cjjuice" target="_blank">
              instagram
            </a>
            <a href="https://www.github.com/cjjuice" target="_blank">
              github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer
