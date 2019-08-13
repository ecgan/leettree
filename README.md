# leettree

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Convert array to binary tree and vice versa using level order traversal like LeetCode!

See LeetCode FAQ on binary tree representation using array [here](https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation-).

## Installation

```shell
npm install leettree
```

## Usage

```javascript
// in node.js environment.
// you can use ES6 import too.
const leettree = require('leettree')

// initial input value.
const array = [1, 2, 3, null, null, 6]

// deserialize the array into binary tree.
const binaryTree = leettree.deserialize(array)

// convert/serialize the binary tree back into array.
const array2 = leettree.serialize(binaryTree)
```

Note that if you just want to use only one function, you can require/import it directly.

```javascript
const serialize = require('leettree/serialize')
const tree = {
  val: 1,
  left: null,
  right: {
    val: 3
  }
}

const array = serialize(tree)
// [1, null, 3]
```

```javascript
const deserialize = require('leettree/deserialize')
const array = [1, null, 3]
const tree = deserialize(array)
```

See the [code and tests](/src) for more usage examples.
