import { expect } from 'chai'
import { readFileSync } from 'fs'
import { evalString, prepare1202, getFirstElement } from './index'

describe('day_02', () => {
  describe('first part - examples', () => {
    it('halt the program with 99', () => {
      expect(evalString('99,1,2,3')).to.equal('99,1,2,3')
    })

    it('addition', () => {
      expect(evalString('1,0,4,5,5,8')).to.equal('1,0,4,5,5,6')
    })

    it('multiplication', () => {
      expect(evalString('2,0,4,5,5,7')).to.equal('2,0,4,5,5,10')
    })

    it('two operations together', () => {
      expect(evalString('2,0,3,3,1,0,7,7')).to.equal('2,0,3,6,1,0,7,9')
    })

    it('given example inpput', () => {
      expect(evalString('1,9,10,3,2,3,11,0,99,30,40,50')).to.equal('3500,9,10,70,2,3,11,0,99,30,40,50')
    })

    it('Prepare string for "1202 program alarm"', () => {
      expect(prepare1202('1,9,10,3,2,3,11,0,99,30,40,50')).to.equal('1,12,2,3,2,3,11,0,99,30,40,50')
    })

    it('get first element', () => {
      expect(getFirstElement('99,2,0,23')).to.equal(99)
    })
  })

  describe('first part - solution', () => {
    it('given input', () => {
      const input = readFileSync('./day_02/input.txt', 'utf8')
      const preparedInput = prepare1202(input)
      const evaluated = evalString(preparedInput)
      expect(getFirstElement(evaluated)).to.equal(4462686)
    })
  })
})
