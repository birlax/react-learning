import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Row from './bGridRow.js';

class Grid extends React.Component {

 constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderRow(i,className){
	  return (
      <Row rowId={i} className={this.props.className}/>
    );
  }

  renderRows(t,className){
    var a = [];
    for (var i = 0; i < t; i++) {
      a.push(this.renderRow(i,className));
    }
    return a;
  }


  render() {
    return (
      <span>
        <div className="bgrid">{this.renderRows(64,"row")}</div>
      </span>
    );
  }
}

export default Grid;
