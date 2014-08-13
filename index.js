var fs = require('fs')
var css = fs.readFileSync(__dirname + '/ratios.css')

module.exports = function() {

  function getCSS() {
    return css
  }

}

