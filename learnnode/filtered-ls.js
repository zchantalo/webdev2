var fs = require('fs')
fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (item){
    if (new RegExp('\\.' + process.argv[3] + '$').test(item)) {
      console.log(item)}
  })
})