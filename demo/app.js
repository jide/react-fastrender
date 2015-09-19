/*global document:false*/
import React from 'react';
import FastRender from '../src/FastRender';

class App extends React.Component {
  render() {
    return (
      <FastRender/>
    );
  }
}

const content = document.getElementById('content');

React.render(<App/>, content);
