(function () {
  'use strict';
  var LambdaWatermark = require('../index');

  var options = {
    watermarkImagePath: './exampleWatermark.png',
    relativeSize: 5,
    watermarkWidth: 250,
    watermarkHeight: 133,
    opacity: 50,
    watermarkedImageACL: 'public-read'
  };

  exports.handler = function(event, context) {
    new LambdaWatermark(options)(event, context);
  };
})();
