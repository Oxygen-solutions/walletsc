# finf (files in folder) [![Build Status](https://travis-ci.org/Urucas/finf.svg)](https://travis-ci.org/Urucas/finf)
Returns an array of files in a folder

#Usage
```bash
npm install --save finf
```

**API**
```javascript
// es2015
let [err, list] = finf("/tests/dummy/");
console.log(list);
// [file.1.js, file.js.1, file1.js]

// with pattern
let [err, list] = finf("/tests/dummy", "*.js");
console.log(list);
// [file.1.js, file1.js]

// es5
var list = finf("/tests/dummy/");
console.log(list[1]);
// [file.1.js, file.js.1, file1.js]
```
