  import React, { Component } from 'react';
  import './DButton.css';

  class DButton extends Component {
      state = {
        dsp: true
      }

  onClickHandler = () => {
        this.setState({dsp: !this.state.dsp})
        this.props.show()
        }

      render(){
        return <div className="DButton" onClick={()=>this.onClickHandler()}>{this.state.dsp ? '-' : '+'}</div>
      }
  }
export default DButton;
