import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import Grid from './bGrid.js';

class GridViewPort extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      vp_className : "bgrid-view-port",
      vp_header_className : "bgrid-header",
      vp_filter_className : "bgrid-filter-hidden",
      vp_summary_className : "bgrid-summary"
    };
  }

 showFilter(currentState){
   let cssShow = "bgrid-filter-show";
   let cssHide = "bgrid-filter-hidden";
   let newCSSState = cssHide;
   if(currentState===cssHide){
     newCSSState = cssShow;
   }else{
     newCSSState = cssHide;
   }
  this.setState({
       vp_filter_className : newCSSState
  })
 }

 render() {
    return (
      <div className={this.state.vp_className}>
        <div className={this.state.vp_header_className} >Header</div>
        <div className={this.state.vp_filter_className} >Filter</div>
        <Grid />
        <div onClick={()=> {this.showFilter(this.state.vp_filter_className)}}>F</div>
        <div className={this.state.vp_summary_className} >Summary</div>
      </div>
    );
  }
}

var style = {
  vp_className : "bgrid-view-port",
  vp_header_className : "bgrid-header",
  vp_filter_className : "bgrid-filter",
  vp_summary_className : "bgrid-summary"
};

ReactDOM.render(<GridViewPort {...style}/>, document.getElementById('grid'));
