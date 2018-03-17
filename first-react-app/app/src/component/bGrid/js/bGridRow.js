import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Cell from './bGridCell.js';

class Row extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderCell(i,className){
	  return <Cell value={i} className={className}/>;
  }

  renderCells(t,className){
    var a = [];
    for (var i = 1; i <= t; i++) {
      a.push(this.renderCell(i,className));
    }
    return a;
  }


  render() {
    return ( <div>
	    {this.renderCells(13,"cell column")}
	    </div>
    );
  }
}

export default Row;
