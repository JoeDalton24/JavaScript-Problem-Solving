/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

const containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (!Array.isArray(nums) || typeof k != "number" || typeof t != "number")
    return false;

  const LENGTH_OF_ARRAY = nums.length;

  for (let index = 0; index < LENGTH_OF_ARRAY; index += 1) {
    for (let j = index + 1; j <= index + k; j += 1) {
      const isConditionOne = Math.abs(nums[index] - nums[j]) <= t;
      if (isConditionOne) return true;
    }
  }

  return false;
};

module.exports = containsNearbyAlmostDuplicate;
