monot
=====

[![Build Status](https://travis-ci.org/jed/monot.png?branch=master)](https://travis-ci.org/jed/monot)

monot creates [JavaScript dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), where each one is greater than the last (also known as _monotonically increasing_).

These come in handy when uniqueness is more important than accuracy, such as for creating keys that need to be both unique and sortable.

Example
-------

```javascript
var monot = require("monot")
var MonotonicDate = monot()

// JavaScript dates are in milliseconds, which means that two
// created  in a tight loop could be identical...
console.log(new Date().toISOString()) // '2013-06-19T22:28:26.220Z'
console.log(new Date().toISOString()) // '2013-06-19T22:28:26.220Z'

// ...whereas monot dates always increase.
console.log(new MonotonicDate().toISOString()) // '2013-06-19T22:28:26.221Z'
console.log(new MonotonicDate().toISOString()) // '2013-06-19T22:28:26.222Z'
```

Installation
------------

    npm install monot

Usage
-----

### var MonotonicDate = monot(lastDate)

This creates a new monotonic Date constructor. All generated dates will be greater than _lastDate_ (which defaults to `Date.now()`). This constructor has the same API as the built-in Date constructor, but returns built-in Date instances.

```javascript
var monot = require("monot")
var Date = monot()

console.log(Date.now()) // 1371682752708
console.log(Date.now()) // 1371682752709
console.log(Date.now()) // 1371682752710

console.log(new MonotonicDate instanceof Date) // true
```

LICENSE
-------

(The MIT License)

Copyright (c) 2013 Jed Schmidt &lt;where@jed.is&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
