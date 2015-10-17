var coordinateParser = require('./coordinate-parser');
var registerComponent = require('../core/register-component').registerComponent;
var utils = require('../vr-utils');

var proto = {
  defaults: {
    value: {
      x: 1,
      y: 1,
      z: 1
    }
  },

  update: {
    value: function () {
      var data = this.data;
      var object3D = this.el.object3D;
      object3D.scale.set(data.x, data.y, data.z);
    }
  }
};

utils.mixin(proto, coordinateParser);
module.exports.Component = registerComponent('scale', proto);