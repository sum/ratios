var fs = require('fs')
var file = fs.readFileSync(__dirname + '/ratios.css', 'utf8')
console.log(file)
