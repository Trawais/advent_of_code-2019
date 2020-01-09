import { readFileSync } from 'fs'

export function getFuel(mass) {
  return Math.floor(mass / 3) - 2
}

export function getFuel2(mass) {
  const tempResult = getFuel(mass)
  if (tempResult <= 0) {
    return 0
  }
  return tempResult + getFuel2(tempResult)
}

export function sumFuelRequirements(inputFileName, callback) {
  return readFileSync(inputFileName, 'utf8')
    .split('\n')
    .map((value) => parseInt(value, 10))
    .reduce((acc, val) => acc + callback(val), 0)
}
