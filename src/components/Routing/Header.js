import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const backgroundImageStyle = {
      backgroundImage: `url("${this.props.img}")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <div>
        <div>
          <div className="bg-green-200 h-80 flex relative" style={backgroundImageStyle}>
            <div className="w-1/2 m-auto text-center">
              <h2 className="text-4xl font-bold">{this.props.title}</h2>
              <p>This is Home page</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
