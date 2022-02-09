const threeSum = require('./3Sum')

describe("Test suit for 3Sum",()=>{
    test('should return array',()=>{
        const result = threeSum([-1,0,1,2,-1,-4]);
        expect(result).toEqual([[-1,-1,2],[-1,0,1]])
    })
})