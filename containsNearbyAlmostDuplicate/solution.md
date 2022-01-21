# Technique

To solve this problem I used the technique of multiple pointers

I know that to return straight you have to check the two conditions, namely

\*condition 1 : abs(nums[i] - nums[j]) <= t

- condition 2: abs(i - j) <= k `

so by using a second loop which goes from index+1 to index plus K the second condition is verified and its allows me not to make useless calculations

```
for (let j = index + 1; j <= index + k; j++) {

}
```

after inside the second for loop remains only to verify the first condition

```
const isConditionOne = Math.abs(nums[index] - nums[j]) <= t;
if (isConditionOne) return true;

```
