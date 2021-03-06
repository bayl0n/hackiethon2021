import React from 'react';
import { TextField } from '@material-ui/core';

export default class Option extends React.Component {
    onChange (e) {
      e.preventDefault();
      this.props.updateLength(this.props.timer, e)
    }
    
    convertToMinutes (seconds) {
      return Math.floor(seconds/60) === 0 ? '' : Math.floor(seconds/60);
    }
    
    render() {
      return (
        <>
        {this.props.children}
        <TextField type="number" min="1" step="1" placeholder="Insert minutes" onChange={this.onChange.bind(this)} value={this.convertToMinutes(this.props.value)} />
        </>
      )
    }
  }