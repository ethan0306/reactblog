import React = require('react');
import canvasActions from './canvasActions';
import canvasStore from './canvasStore';
import CanvasRow from './canvasRow';
import CanvasToolbox from './canvasToolbox';
import BlogHeader from '../controls/blogHeader';
import BodyText from '../controls/bodyText';
import HeaderText from '../controls/headerText';
import QuoteText from '../controls/quoteText';
import Footer from '../controls/footer';

interface Props {
  
}

export default class Canvas extends React.Component<Props, any> {
  unsubscribe: any;
  
  constructor(props: Props) {
    super(props);
    this.onStateUpdate = this.onStateUpdate.bind(this);
    this.onPublish = this.onPublish.bind(this);
    this.state = canvasStore.getInitialState();
  }
  
  componentDidMount() {
    this.unsubscribe = canvasStore.listen(this.onStateUpdate);
  }
  
  componentWillUnmount() {
    this.unsubscribe();
  }
  
  onStateUpdate(newState) {
    this.setState(newState);
  }
  
  onPublish() {
    window.alert(JSON.stringify(this.state.canvasRows));
  }
  
  render() {
    let canvasRows = [];
    let length = this.state.canvasRows.length;
    
    for (var i = 0; i < length; ++i) {
      if (this.state.canvasRows[i].type === "BodyText") {
        canvasRows.push([<BodyText contentEditable={this.state.isEditable} state={this.state.canvasRows[i].state}/>]);
      } else if (this.state.canvasRows[i].type === "HeaderText") {
        canvasRows.push([<HeaderText contentEditable={this.state.isEditable} state={this.state.canvasRows[i].state}/>]);
      } else if (this.state.canvasRows[i].type === "QuoteText") {
        canvasRows.push([<QuoteText contentEditable={this.state.isEditable} state={this.state.canvasRows[i].state}/>]);
      }
    }
    
    let renderedRows;
    if (this.state.isEditable) {
      renderedRows = canvasRows.map(function(row, i) {
        return (
          <div>
            <CanvasRow key={Math.random()} index={i+1} childControls={row}/>
            <CanvasToolbox index={i+1}/>
          </div>
        )
      });
    }
    else {
      renderedRows = canvasRows.map(function(row, i) {
        return <CanvasRow key={Math.random()} index={i+1} childControls={row}/>
      })
    }
    
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm12">
            <div className="ms-Blog-hero">
              <img src="assets/chief.jpg"/>
            </div>
          </div>
        </div>
        <div className="ms-Grid-row">
          <BlogHeader contentEditable={this.state.isEditable}/>        
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm12 ms-u-md6 ms-u-mdPush3">
            { this.state.isEditable ? 
            <button className="ms-Button ms-Button--hero" onClick={this.onPublish}>
              <span className="ms-Button-icon"><i className="ms-Icon ms-Icon--story"></i></span>
              <span className="ms-Button-label">Publish</span>
            </button> : <div/>
            }
            <button className="ms-Button ms-Button--hero" onClick={canvasActions.edit}>
              <span className="ms-Button-icon"><i className={this.state.isEditable ? "ms-Icon ms-Icon--pencil" : "ms-Icon ms-Icon--save"}></i></span>
              <span className="ms-Button-label">{this.state.isEditable ? 'Save' : 'Edit'}</span>
            </button>
          </div>
        </div>
        {this.state.isEditable ? <CanvasToolbox index={0}/> : <div/>}
        { renderedRows }
        <Footer/>
      </div>
    );
  }
}
