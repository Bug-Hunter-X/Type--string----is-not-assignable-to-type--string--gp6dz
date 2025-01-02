# Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string.  The `greeter` function expects a single string, but the `user` variable is an array. This causes a type error.

The solution involves either modifying the `greeter` function to handle arrays or changing the `user` variable to a single string.