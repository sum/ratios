var fs = require('fs')
var insertCSS = require('insert-css')
var css = fs.readFileSync(__dirname + '/ratios.css')

module.exports = function() {

  function getCSS() {
    return css
  }

  function insertCSS() {
    insertCSS(css)
  }

}

