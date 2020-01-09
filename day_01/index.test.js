import { getFuel, getFuel2, sumFuelRequirements } from './index'

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
    expect(sumFuelRequirements('./day_01/input_test.txt', getFuel)).toBe(34241)
  })

  test('given input', () => {
    expect(sumFuelRequirements('./day_01/input.txt', getFuel)).toBe(3254441)
  })
})

describe('second part of task', () => {
  test('example 1', () => {
    expect(getFuel2(14)).toBe(2)
  })
  test('example 2', () => {
    expect(getFuel2(1969)).toBe(966)
  })
  test('example 3', () => {
    expect(getFuel2(100756)).toBe(50346)
  })
})

describe('second part - given input', () => {
  test('test input', () => {
    expect(sumFuelRequirements('./day_01/input_test.txt', getFuel2)).toBe(51316)
  })

  test('given input', () => {
    expect(sumFuelRequirements('./day_01/input.txt', getFuel2)).toBe(4878818)
  })
})
