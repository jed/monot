var _new = require("./new")

function monot(last) {
  last = Number(last) || Date.now()

  function MonotonicDate() {
    if (!(this instanceof MonotonicDate)) {
      return new MonotonicDate().toLocaleString()
    }

    if (arguments.length) {
      return _new.apply(Date, arguments)
    }

    return new Date(now())
  }

  function now() {
    var now = Date.now()

    if (now > last) return last = now

    return ++last
  }

  MonotonicDate.prototype = Date.prototype
  MonotonicDate.UTC       = Date.UTC
  MonotonicDate.parse     = Date.parse
  MonotonicDate.now       = now

  return MonotonicDate
}

module.exports = monot
