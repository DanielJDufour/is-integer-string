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
```
import isIntegerString from 'is-integer-string';

const result = isIntegerString('1_234.00');
// result is true

const result = isIntegerString('-0.3');
// result is false
```

