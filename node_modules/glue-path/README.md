# glue-path [![Build Status](https://travis-ci.org/Urucas/glue-path.svg)](https://travis-ci.org/Urucas/glue-path)
Glue & normalize path depending on os platform

#Usage
```bash
npm install --save glue-path
```

**API**
```javascript
var glue = require('glue-path')
var path = glue(["path", "to", "someting"])
console.log(path)
// in my case im using osx the result will be;
// path/to/something
```
