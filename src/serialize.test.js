const serialize = require('./serialize')

test('null tree', () => {
  const tree = null

  const result = serialize(tree)

  expect(result).toStrictEqual(null)
})

test('tree with only root node, no left and right', () => {
  const tree = {
    val: 5
  }

  const result = serialize(tree)

  expect(result).toStrictEqual([5])
})

test('3 level tree with values', () => {
  const tree = {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4
      },
      right: {
        val: 5
      }
    },
    right: {
      val: 3,
      left: {
        val: 6
      },
      right: {
        val: 7
      }
    }
  }

  const result = serialize(tree)

  expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7])
})

test('3 level tree with nulls', () => {
  const tree = {
    val: 5,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: {
        val: 4
      },
      right: null
    }
  }

  const result = serialize(tree)

  expect(result).toStrictEqual([5, 1, 2, null, null, 4])
})
