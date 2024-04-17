import React, { Component } from "react";

class CookieBtn extends Component{
    render(){
      return (
        <div>
          <button onClick={this.props.action}>{this.props.title}</button>
        </div>
      );
    }
  }

  export default CookieBtn;