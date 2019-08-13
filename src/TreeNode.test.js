const TreeNode = require('./TreeNode')

test('new TreeNode', () => {
  const treeNode = new TreeNode(5)

  expect(treeNode).toEqual({
    val: 5,
    left: null,
    right: null
  })
})
