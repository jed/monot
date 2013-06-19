var cache = {}

module.exports = function() {
  var i = arguments.length
  var fn = cache[i]

  if (!fn) {
    for (var list = []; i--;) list[i] = "$" + i

    fn = Function(list, "return new this(" + list + ")")

    cache[i] = fn
  }

  return fn.apply(this, arguments)
}
