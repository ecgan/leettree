const deserialize = require('./deserialize')
const TreeNode = require('./TreeNode')

test('non-array parameter should throw error', () => {
  const object = {}

  expect(() => {
    deserialize(object)
  }).toThrow()
})

test('empty array should return null', () => {
  const array = []

  const result = deserialize(array)

  expect(result).toStrictEqual(null)
})

test('1 element array should return tree with 1 node', () => {
  const array = [1]

  const result = deserialize(array)

  const expected = new TreeNode(1)

  expect(result).toStrictEqual(expected)
})

test('3 element array should return tree with 3 nodes', () => {
  const array = [1, 2, 3]

  const result = deserialize(array)

  const expected = new TreeNode(1)
  expected.left = new TreeNode(2)
  expected.right = new TreeNode(3)

  expect(result).toStrictEqual(expected)
})

test('6 element array with 2 null should return tree with 4 nodes', () => {
  const array = [1, 2, 3, null, null, 6]

  const result = deserialize(array)

  const expected = new TreeNode(1)
  expected.left = new TreeNode(2)
  expected.right = new TreeNode(3)
  expected.right.left = new TreeNode(6)

  expect(result).toStrictEqual(expected)
})
