import React = require('react');

interface BlogHeaderProps {
  contentEditable: boolean;
}

export default class BlogHeader extends React.Component<BlogHeaderProps, any> {
  render() {
    return (
      <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-mdPush3">
        <div className="ms-Blog-header">
          <h1 className="ms-font-su" contentEditable={this.props.contentEditable}>Canvas Prototype</h1>
          <h2 className="ms-font-xxl" contentEditable={this.props.contentEditable}>A study of React</h2>
          <img src="assets/profile.jpg"/>
          <p className="ms-font-xl">{this.props.contentEditable ? 'Unpublished' : 'Published by John Nguyen'}</p>
        </div>
      </div>
    );
  }
}