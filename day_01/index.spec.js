import { expect } from 'chai'
import { getFuel, getFuel2, sumFuelRequirements } from './index'

describe('day_01', () => {
  describe('first part', () => {
    it('example 1', () => {
      expect(getFuel(12)).to.equal(2)
    })
    it('example 2', () => {
      expect(getFuel(14)).to.equal(2)
    })
    it('example 3', () => {
      expect(getFuel(1969)).to.equal(654)
    })
    it('example 4', () => {
      expect(getFuel(100756)).to.equal(33583)
    })

    it('should pass for testing input', () => {
      expect(sumFuelRequirements('./day_01/input_test.txt', getFuel)).to.equal(34241)
    })

    it('should pass for given input', () => {
      expect(sumFuelRequirements('./day_01/input.txt', getFuel)).to.equal(3254441)
    })
  })

  describe('second part', () => {
    it('example 1', () => {
      expect(getFuel2(14)).to.equal(2)
    })
    it('example 2', () => {
      expect(getFuel2(1969)).to.equal(966)
    })
    it('example 3', () => {
      expect(getFuel2(100756)).to.equal(50346)
    })

    it('test input', () => {
      expect(sumFuelRequirements('./day_01/input_test.txt', getFuel2)).to.equal(51316)
    })

    it('given input', () => {
      expect(sumFuelRequirements('./day_01/input.txt', getFuel2)).to.equal(4878818)
    })
  })
})
