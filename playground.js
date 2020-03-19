const goodArray = [1, 2, 3]
const badArrayCommaSpacing = [1,2,3]
const badArraySpacing = [ 1, 2, 3 ]

const goodArrayNewLine = [
  1, 2, 3, 4, 5,
]
const badArrayNewLine = [
  1, 2, 3,
  4, 5,
]

const goodArrow = (a) => a
const badArrowSpaceBefore = ()=> {}
const badArrowSpaceAfter = () =>{}

const goodBlockSpacing = (a, b) => { return a + b }
const badBlockSpacing = (a, b) => {return a + b}

const foo = { baz: ''}
const badDotPlacement = foo
  .baz
const goodDotPlacement = foo.
  baz

const badObjectNewLine = { foo: 1, bar: 2, baz: 3, bang: 4, bong: 5 }
const goodObjectNewLine = { foo: 1, bar: 2, baz: 3, bang: 4 }

module.exports = {
  goodArray,
  badArrayCommaSpacing,
  badArraySpacing,
  goodArrayNewLine,
  badArrayNewLine,
  goodArrow,
  badArrowSpaceBefore,
  badArrowSpaceAfter,
  goodBlockSpacing,
  badBlockSpacing,
  badDotPlacement,
  goodDotPlacement,
  badObjectNewLine,
  goodObjectNewLine,
}
