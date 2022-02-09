/**
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
const threeSum = (nums) => {
  let arr = [];
  const LENGTH_OF_NUMS = nums.length;
  const hash = {};

  for (let index = 0; index < LENGTH_OF_NUMS; index += 1) {
    const target = nums[index];

    for (let j = index + 1; j < LENGTH_OF_NUMS; j += 1) {
      const addUp = 0 - (target + nums[j]);
      if (addUp in hash) {
        arr.push([target, nums[j], hash[addUp]]);
      } else {
        hash[nums[j]] = nums[j];
      }
    }
  }

  console.log(hash);

  return arr;
};

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// target = -1;

// target + nums[j] + addup=0
// 0 - (target+nums[j])
// -1 + 2 = 1
// 0-1=-1

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
module.exports = threeSum;
