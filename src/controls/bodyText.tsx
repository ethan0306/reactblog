import React = require('react');

interface BodyTextProps {
  contentEditable: boolean;
  state: any;
}

export default class BodyText extends React.Component<BodyTextProps, any> {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  
  render() {
    return (
      <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-mdPush3">
        <p className="ms-font-l" contentEditable={this.props.contentEditable}>{this.state.text == null ? "Add a paragraph" : this.state.text }</p>
      </div>
    )
  }
}