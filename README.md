dust-partials-middlware
=========

dust-partials-middlware is a simple middleware package that allows you to compile and memoize dustjs partials provided to the client, as opposed to commandline compiling them.  Assuming the memoization library is competent (currently, I'm using memoizee for this), the performance difference should be negligible.

Version
-

1.0

Tech
-----------

dust-partials-middleware uses a few open source projects:

* [dustjs-linkedin] - The mature linkedin fork of the dustjs environment
* [memoizee] - A decent memo library.

Installation
--------------

```
//Eventually, when published!
npm install dust-partials-middleware
```

Using
--------------
```
var dust_partials = require('dust-partials-middleware');
app.use('/partials',dust_partials(__dirname,'/views'));
```

License
-

MIT

*Free Software, Fuck Yeah!*

  [dustjs-linkedin]: https://github.com/linkedin/dustjs
  [memoizee]: https://github.com/medikoo/memoize
