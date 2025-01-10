# @tomsd/kuromoji-dict

It's a dict directory for kuromoji.js.

![npm](https://img.shields.io/npm/v/@tomsd/kuromoji-dict?style=for-the-badge&logo=npm)
![NPM](https://img.shields.io/npm/l/@tomsd/kuromoji-dict?style=for-the-badge&logo=npm)
![release date](https://img.shields.io/github/release-date/tomsdoo/kuromoji-dict?style=for-the-badge&logo=npm)

![ci](https://img.shields.io/github/actions/workflow/status/tomsdoo/kuromoji-dict/ci.yml?style=social&logo=github)
![checks](https://img.shields.io/github/check-runs/tomsdoo/kuromoji-dict/main?style=social&logo=github)
![top language](https://img.shields.io/github/languages/top/tomsdoo/kuromoji-dict?style=social&logo=javascript)
![Maintenance](https://img.shields.io/maintenance/yes/2025?style=social&logo=github)
![depends on node greater or equal 18](https://img.shields.io/badge/node.js-%3E%3D%2018-lightyellow?style=social&logo=nodedotjs)

## Installation
``` sh
npm install @tomsd/kuromoji-dict
```

# Usage

``` typescript
import { builder } from "kuromoji";
import { getDictPath } from "@tomsd/kuromoji-dict";

new Promise((resolve, reject) => {
  builder({
    dicPath: getDictPath(),
  }).build((err, tokenizer) => {
    if (err) {
      reject(err);
    } else {
      resolve(tokenizer);
    }
  })
})
  .then(tokenizer => 
    tokenizer.tokenize("これはテストです。")
  )
  .then(console.log)
  .catch(console.log);

```