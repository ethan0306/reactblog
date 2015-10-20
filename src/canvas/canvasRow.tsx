import React = require('react');
import CanvasToolbox from './canvasToolbox';

interface CanvasRowProps {
  key: number;
  index: number;
  childControls: JSX.Element[];
}

export default class CanvasRow extends React.Component<CanvasRowProps, any> {
  constructor(props: CanvasRowProps) {
    super(props);
    this.state = {
      childControls: props.childControls,
    }
  }
  
  render() {
    return (
      <div className="ms-Grid-row">
        { this.state.childControls }
      </div>
    );
  }
}