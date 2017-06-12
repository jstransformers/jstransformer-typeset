# jstransformer-typeset

[Typeset](https://github.com/davidmerfield/typeset) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-typeset/master.svg)](https://travis-ci.org/jstransformers/jstransformer-typeset)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-typeset/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-typeset)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-typeset/master.svg)](http://david-dm.org/jstransformers/jstransformer-typeset)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-typeset.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-typeset.svg)](https://www.npmjs.org/package/jstransformer-typeset)

## Installation

    npm install jstransformer-typeset

Optionally, also use the css from [here](https://raw.githubusercontent.com/davidmerfield/Typeset/master/demo/typeset.css)

## API

```js
var typeset = require('jstransformer')(require('jstransformer-typeset'));

typeset.render('<p>"Hello," said the fox.</p>').body
//=> '<p><span class="pull-double">“</span>Hello,” said the fox.</p>'
```

## License

MIT
