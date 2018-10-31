import React from 'react'
import Masonry from 'react-masonry-component';
import ClientBlock from './client-block'

class ClientSection extends React.Component {
  render () {
    var createItem  = (client,i) => <ClientBlock key={client.node.id} client={client.node} index={i} />;

    return (
      <div className="row row-no-padding">
        <div className="heading row">
          <h1>Work.</h1>
        </div>
        <Masonry 
          className="client-blocks col-xs-10 col-xs-offset-1"
          options={{
            // options
            itemSelector: '.client-block',
            columnWidth: '.small',
            percentPosition: true
          }}
        >
          {this.props.clients.map(createItem)}
        </Masonry>
      </div>
    );
  }
}

export default ClientSection
