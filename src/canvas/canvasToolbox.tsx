import React = require('react');
import canvasActions from './canvasActions';
import BodyText from '../controls/bodyText';
import HeaderText from '../controls/headerText';
import QuoteText from '../controls/quoteText';

interface CanvasAddButtonProps {
  index: number;
}

export default class CanvasToolbox extends React.Component<CanvasAddButtonProps, any> {
  constructor(props) {
    super(props);
    this.addHeader = this.addHeader.bind(this);
    this.addQuote = this.addQuote.bind(this);
    this.addParagraph = this.addParagraph.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
  
  addHeader() {
    canvasActions.addRow(
      {
        type: "HeaderText",
        index: this.props.index,
        state: {
          text: null
        }
      }
    )
  }
  
  addQuote() {
    canvasActions.addRow(
      {
        type: "QuoteText",
        index: this.props.index,
        state: {
          text: null
        }
      }
    )
  }
  
  addParagraph() {
    canvasActions.addRow(
      {
        type: "BodyText",
        index: this.props.index,
        state: {
          text: null
        }
      }
    )
  }
  
  deleteRow() {
    canvasActions.deleteRow(this.props.index);
  }
  
  render() {
    return (
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-mdPush5">
          <button className="ms-Button ms-Button--command" onClick={this.addHeader}>
            <span className="ms-Button-icon"><i className="ms-Icon ms-Icon--header"></i></span>
            <span className="ms-Button-label">Header</span>
          </button>
          <button className="ms-Button ms-Button--command" onClick={this.addQuote}>
            <span className="ms-Button-icon"><i className="ms-Icon ms-Icon--quote"></i></span>
            <span className="ms-Button-label">Quote</span>
          </button>
          <button className="ms-Button ms-Button--command" onClick={this.addParagraph}>
            <span className="ms-Button-icon"><i className="ms-Icon ms-Icon--text"></i></span>
            <span className="ms-Button-label">Paragraph</span>
          </button>
          <button className="ms-Button ms-Button--command" onClick={this.deleteRow}>
            <span className="ms-Button-icon"><i className="ms-Icon ms-Icon--trash"></i></span>
            <span className="ms-Button-label">Remove</span>
          </button>
        </div>
      </div>
    );
  }
}