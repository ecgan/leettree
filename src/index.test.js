const leettree = require('./index')

test('leettree should have serialize function', () => {
  expect(leettree).toHaveProperty('serialize')
})

test('leettree should have deserialize function', () => {
  expect(leettree).toHaveProperty('deserialize')
})

test('leettree should have TreeNode constructor function', () => {
  expect(leettree).toHaveProperty('TreeNode')
})
