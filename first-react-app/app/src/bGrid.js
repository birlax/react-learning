import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Row from './bGridRow.js';

class Grid extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderRow(i){
	  return (
      <Row/>
    );
  }

  renderRows(t){
    var a = [];
    for (var i = 0; i < t; i++) {
      a.push(this.renderRow(i));
    }
    return a;
  }


  render() {
    return (
      <span>
        <div>{this.renderRows(14)}</div>
      </span>
    );
  }
}

ReactDOM.render(<Grid/>, document.getElementById('grid'));
