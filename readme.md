# doodle-data
[![NPM](https://nodei.co/npm/doodle-data.png)](https://nodei.co/npm/doodle-data/)

## Usage

``` js
var doodle = require('doodle-data');
doodle("<23-character poll id>", function(data) {
    console.log(data); // ==> big undocumented JSON thing
});
```

You find the 23-character `poll id` by following the "Administer Poll" link in the confirmation mail. It's in the URL.

## License
MIT
