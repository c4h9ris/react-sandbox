require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Index from './pages/home/index';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Index />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
