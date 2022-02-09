const twoSum = require('./twoSum')


describe("testing two sum function",()=>{
    test.skip("should return array ",()=>{
        const result=twoSum([2,7,11,15],9)
        expect(result).toEqual([0,1])
    })

    test.skip("should fail ",()=>{
        const result=twoSum([3,2,4],6)
        expect(result).toEqual([0,1])
    })

    test("should pass and return array ",()=>{
        const result=twoSum([3,3],6)
        expect(result).toEqual([0,1])
    })
})