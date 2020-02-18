const fs = require('fs');
var totalNumberOfLines = ((fs.readFileSync(process.argv[2])).toString()).split('\n').length;
console.log(totalNumberOfLines - 1)