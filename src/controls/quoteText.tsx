import React = require('react');

interface QuoteTextProps {
  contentEditable: boolean;
  state: any;
}

export default class QuoteText extends React.Component<QuoteTextProps, any> {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  
  render() {
    return (
      <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-mdPush3">
        <p className="ms-Blog-text--quote ms-font-xl" contentEditable={this.props.contentEditable}>
          {this.state.text === null ? "Add a quote" : this.state.text}
        </p>
      </div>
    );
  }
}