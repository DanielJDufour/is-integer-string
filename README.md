# is-integer-string
> Checks if a String Represents an Integer

# Motivation
Design a library that is forgiving of user input and accepts the greatest amount of valid integers.

# Features
- Designed to accept all valid representations
- Support for Numeric Separators and Commas!
- Clear Explanations When a String Fails

# install
```bash
npm install is-integer-string
```

# usage
```js
import isIntegerString from 'is-integer-string';

const result = isIntegerString('1_234.00');
// result is true

const result = isIntegerString('-0.3');
// result is false
```

# advanced usage
Pass in an options object with debug set to true for increased logging
```js
const options = { debug: true };
isIntegerString('1234.567', options);
```
This will generate the following output:
```
[is-integer-string] str: 1234.567
[is-integer-string] debug: true
[is-integer-string] parts: [ '1234', '567' ]
[is-integer-string] left: 1234
[is-integer-string] right: 567
[is-integer-string] the right side of the decimal contains invalid character(s): [ '5', '6', '7' ]
```

