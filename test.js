var monot = require("./monot")
var MonotonicDate = monot()

Array(10001)
  .join(",")
  .split(",")
  .map(function(){ return new MonotonicDate })
  .forEach(function(cur, i, all) {
    if (all[i - 1] >= cur) throw new Error
  })

var start = Date.now() + 1000

if (start > monot(start).now()) throw new Error
