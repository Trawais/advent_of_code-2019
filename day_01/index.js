import { readFileSync } from 'fs'

export function getFuel(mass) {
  return Math.floor(mass / 3) - 2
}

export function sumFuelRequirements(inputFileName) {
  return readFileSync(inputFileName, 'utf8')
    .split('\n')
    .map((value) => parseInt(value, 10))
    .reduce((acc, val) => acc + getFuel(val), 0)
}
