import { getFuel, sumFuelRequirements } from './index'

describe('given examples', () => {
  test('example 1', () => {
    expect(getFuel(12)).toBe(2)
  })
  test('example 2', () => {
    expect(getFuel(14)).toBe(2)
  })
  test('example 2', () => {
    expect(getFuel(1969)).toBe(654)
  })
  test('example 2', () => {
    expect(getFuel(100756)).toBe(33583)
  })
})

describe('first part of task', () => {
  test('test input', () => {
    expect(sumFuelRequirements('./day_01/input_test.txt')).toBe(34241)
  })
})

describe('first part of task', () => {
  test('given input', () => {
    expect(sumFuelRequirements('./day_01/input.txt')).toBe(1)
  })
})
