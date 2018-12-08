  import React, { Component } from 'react';
  import './DButton.css';

const  dbutton =(props) => {
      let style = "DButton"

      if(props.show){
        style = style + " " + "opena"
      } else {
        style = style + " " + "closea"
      }

      return <div className={style} onClick={props.click}>{props.show ? '-' : '+'}</div>

  }
export default dbutton;
