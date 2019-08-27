# leettree

[![Build Status](https://travis-ci.org/ecgan/leettree.svg?branch=master)](https://travis-ci.org/ecgan/leettree) [![codecov](https://codecov.io/gh/ecgan/leettree/branch/master/graph/badge.svg)](https://codecov.io/gh/ecgan/leettree) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
// TreeNode {
//   val: 1,
//   right: TreeNode {
//     val: 3,
//     right: null,
//     left: TreeNode {
//       val: 6,
//       right: null,
//       left: null
//     }
//   },
//   left: TreeNode {
//     val: 2,
//     right: null,
//     left: null
//   }
// }

// serialize the binary tree back into array.
const array2 = leettree.serialize(binaryTree)
// [1, 2, 3, null, null, 6]
```

See the [code and tests](/src) for more usage examples.
