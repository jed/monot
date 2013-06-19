var monot = require("./monot")

Array(10001)
  .join(",")
  .split(",")
  .map(function(){ return new monot.Date })
  .forEach(function(cur, i, all) {
    if (all[i - 1] >= cur) throw new Error
  })

var start = global.Date.now() + 1000

if (start > monot(start).now()) throw new Error
