/**
 * 
 * @param {Array} nums 
 * @param {Number} target 
 * @returns 
 */
const twoSum=(nums,target)=>{
    let hash = {};
    const LENGTH_OF_NUMS=nums.length;

    for(let index=0;index<LENGTH_OF_NUMS;index+=1){

        const addUp=target-nums[index];

        if(addUp in hash) return [hash[addUp],index]

        hash[nums[index]]=index;
    }

    return []
}

module.exports=twoSum