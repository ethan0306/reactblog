import React = require('react');

interface FooterProps {
}

export default class Footer extends React.Component<FooterProps, any> {
  render() {
    return (
      <div className="ms-Grid-row" style={{marginTop: 50}}>
      <div className="ms-Grid-col ms-u-sm12 ms-bgColor-neutralPrimary">
        <p style={{marginLeft: 20}} className="ms-font-s ms-fontColor-white">Microsoft Confidential</p>
      </div>
      </div>
    );
  }
}
