import React = require('react');
import canvasActions from './canvasActions';
import BodyText from '../controls/bodyText';

var Reflux = require('reflux');

var canvasStore = Reflux.createStore({  
  init: function() {
    this.canvasRows = [
      {
        type: "HeaderText",
        index: 1,
        state: {
          text: "Header 1"
        }
      },
      {
        type: "BodyText",
        index: 2,
        state: {
        text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.'

        }
      },
      {
        type: "BodyText",
        index: 3,
        state: {
        text: 'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.'

        }
      },
      {
        type: "QuoteText",
        index: 4,
        state: {
        text: 'A quote pulled from the content, i.e. a pull-quote.'
        }
      },
      {
        type: "BodyText",
        index: 5,
        state: {
        text: 'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.'

        }
      },
      {
        type: "HeaderText",
        index: 6,
        state: {
          text: "Header 2"
        }
      },
      {
        type: "BodyText",
        index: 7,
        state: {
        text: 'Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida.'
        }
      },
    ];
    this.isEditable = false;
    this.listenTo(canvasActions.addRow,  this.onAddRow);
    this.listenTo(canvasActions.deleteRow,  this.onDeleteRow);
    this.listenTo(canvasActions.edit, this.onEdit);
  },
  
  getInitialState: function() {
    return { 
      canvasRows: this.canvasRows,
      isEditable: this.isEditable
    };
  },
  
  onEdit: function() {
    this.isEditable = !this.isEditable;
    this.trigger(
      {
        canvasRows: this.canvasRows,
        isEditable: this.isEditable
      }
    );
  },
  
  onDeleteRow: function(index) {
    this.canvasRows.splice(index, 1);
    this.trigger(
      {
        canvasRows: this.canvasRows,
        isEditable: this.isEditable
      }
    );
  },
  
  onAddRow: function(newRow) {
    this.canvasRows.splice(newRow.index, 0, newRow);
    this.trigger(
      {
        canvasRows: this.canvasRows,
        isEditable: this.isEditable
      }
    );
  },
});

export default canvasStore;