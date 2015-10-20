import React = require('react');
import Canvas from './canvas/canvas';

require('../assets/css/normalize.css');
require('../assets/css/fabric.css');
require('../assets/css/fabric.components.css');
require('../assets/css/app.css');

React.render(<Canvas/>, window.document.body);