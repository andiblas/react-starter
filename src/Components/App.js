import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderNavigation />
        <Footer />
      </div>
    );
  }
}
