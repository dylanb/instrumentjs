# InstrumentJS

## Install

```
npm install instrumentjs
```

## Usage

```
var instrument = require('instrumentjs');
var javascriptSrc = 'your source code here';

var instrumentedSrc = instrument(javascriptSrc);
```

The return value from a call to the instrument function is the following structure:

```
{
	names: : {
		statement: String,
		expression: String,
		block: String,
		intro: String,
		extro: String
	},
	nodes: {
		'0': NodeInfo
		... (repeated for as many source code nodes as exist)
	},
	blockCounter: Integer,
	nodeCounter: Integer,
	source: String,
	instrumentedSource: String
}
```

Where the values of the items in the `names` structure are the function calls that will be called each time a statement, expression or block is executed and where intro and extro are the calls made wach time a function is entered or exited respectively.

You can use these values to create functions that will capture the instrumentation data as the instrumented javascript is executed.

For an example of how this is used, see the (gulp coverage)[https://github.com/dylanb/gulp-coverage] module.
