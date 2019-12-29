# sheller.js
Shell call with async/await
```js
const shell = require('sheller.js')

const main = async () => {
  console.log(await shell("echo hello")) // "hello"
  console.log(await shell("pwd")) // "/home/noye/workspace/"
  console.log(await shell("echo "3 4" | python3 sum.py")) // 7
}
```
