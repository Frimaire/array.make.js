## @Deprecated

Now ES6's `Array.from` is widely available. So, just use it.

```javascript
// returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Array.from({length: 10}, (_, i) => i)
```

# array.make.js

A non-standard JavaScript extension creating an Array with the return value of the callback.
