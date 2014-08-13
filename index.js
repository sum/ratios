var fs = require('browserify-fs')
var file
var insertCSS = require('insert-css')
fs.readFile('/ratios.css', 'utf-8', function(err, data) {
    console.log(data)
})

module.exports = function() {
  return file;
}

