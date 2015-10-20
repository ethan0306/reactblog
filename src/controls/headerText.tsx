import React = require('react');

interface HeaderTextProps {
  contentEditable: boolean;
  state: any;
}

export default class HeaderText extends React.Component<HeaderTextProps, any> {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  
  render() {
    return (
      <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-mdPush3">
        <h3 className="ms-Blog-text ms-font-xl" contentEditable={this.props.contentEditable}>
          {this.state.text === null ? "Header" : this.state.text}
        </h3>
      </div>
    );
  }
}