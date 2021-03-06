import React, { Component } from 'react';

import Button from './button.js'
import InteractiveButton from './interactive-button.js';


export default class App extends Component {
  
  render() {
    
    return (
      <div className='app'>
        <div className = 'button-container'>
        <Button time = 'day' />
        <InteractiveButton />
        </div>
        
        
      </div>
    );
  }
}
