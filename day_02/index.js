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

export function prepare1202(input) {
  const stack = getStack(input)
  stack[1] = 12
  stack[2] = 2
  return stack.toString()
}
