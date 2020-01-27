function executeOperation(stack, pointer, callback) {
  const newStack = stack
  const firstOperand = stack[pointer + 1]
  const secondOperand = stack[pointer + 2]
  const resultPosition = stack[pointer + 3]
  newStack[resultPosition] = callback(stack[firstOperand], stack[secondOperand])
  return newStack
}

function getStack(input) {
  return input.split(',').map((v) => parseInt(v, 10))
}

export function getFirstElement(input) {
  const stack = getStack(input)
  return parseInt(stack[0], 10)
}

export function evalString(input) {
  const stack = getStack(input)
  let pointer = 0

  while (pointer + 3 <= stack.length) {
    switch (stack[pointer]) {
      case 1:
        executeOperation(stack, pointer, (a, b) => a + b)
        break
      case 2:
        executeOperation(stack, pointer, (a, b) => a * b)
        break
      default:
        pointer = stack.length + 1 // exit the main while loop
        break
    }
    pointer += 4
  }
  return stack.toString()
}

export function injectNounAndVerb(input, noun, verb) {
  const stack = getStack(input)
  stack[1] = noun
  stack[2] = verb
  return stack.toString()
}

export function secondPart(input, expectedResult) {
  const nouns = Array.from(Array(100).keys())
  const verbs = Array.from(Array(100).keys())
  let result = -1

  nouns.some((noun) => verbs.some((verb) => {
    const tempResult = getFirstElement(evalString(injectNounAndVerb(input, noun, verb)))
    if (tempResult === expectedResult) {
      result = noun * 100 + verb
      return true
    }
    return false
  }))

  return result
}
