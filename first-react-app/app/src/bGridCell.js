import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
	    <span className={this.props.className}>
	    	{this.props.value}
	    </span>
    );
  }
}
 
export default Cell;
