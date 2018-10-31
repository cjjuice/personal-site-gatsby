import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './nav'
import Landing from './landing'
import ClientSection from './client-section'
import Footer from './footer'
import logo from '../images/cj-logo.svg'
import arrow from '../images/down-arrow.svg'

const App = () => (
  <StaticQuery
    query={graphql`
      query ClientDataQuery {
        allClientsYaml {
          edges {
            node {
              id
              name
              box_size
              url
              overlay_color
              image_path {
                publicURL
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="container-fluid">
        <Nav logo_url={logo} />
        <Landing logo_url={logo} arrow_url={arrow} />
        <ClientSection clients={data.allClientsYaml.edges} />
        <Footer />
      </div>
    )}
  />
)

export default App
