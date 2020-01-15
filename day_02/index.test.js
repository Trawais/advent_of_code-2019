import { readFileSync } from 'fs'
import { evalString, prepare1202, getFirstElement } from './index'

describe('first part - examples', () => {
  test('halt the program with 99', () => {
    expect(evalString('99,1,2,3')).toBe('99,1,2,3')
  })

  test('addition', () => {
    expect(evalString('1,0,4,5,5,8')).toBe('1,0,4,5,5,6')
  })

  test('multiplication', () => {
    expect(evalString('2,0,4,5,5,7')).toBe('2,0,4,5,5,10')
  })

  test('two operations together', () => {
    expect(evalString('2,0,3,3,1,0,7,7')).toBe('2,0,3,6,1,0,7,9')
  })

  test('given example inpput', () => {
    expect(evalString('1,9,10,3,2,3,11,0,99,30,40,50')).toBe('3500,9,10,70,2,3,11,0,99,30,40,50')
  })

  test('Prepare string for "1202 program alarm"', () => {
    expect(prepare1202('1,9,10,3,2,3,11,0,99,30,40,50')).toBe('1,12,2,3,2,3,11,0,99,30,40,50')
  })

  test('get first element', () => {
    expect(getFirstElement('99,2,0,23')).toBe(99)
  })
})

describe('first part - solution', () => {
  test('given input', () => {
    const input = readFileSync('./day_02/input.txt', 'utf8')
    const preparedInput = prepare1202(input)
    const evaluated = evalString(preparedInput)
    expect(getFirstElement(evaluated)).toBe(4462686)
  })
})
