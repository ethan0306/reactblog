var Reflux = require('reflux');

interface ICanvasActions {
 addRow();
 edit: any;
 deleteRow: any;
}

var canvasActions: ICanvasActions = Reflux.createActions([
  'addRow',
  'edit',
  'deleteRow',
]);

export default canvasActions;