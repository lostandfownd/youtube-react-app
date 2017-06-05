import React, { Component } from 'react';
import Copywright from './elements/Copywright';
import './Footer.css';

class Footer extends Component {
  render () {

    // dont console log in return method or it breaks
    // console.log("our data is", data);


    return (
        <div className="app-footer">
            <Copywright />
        </div>
    );
  }
}

export default Footer;