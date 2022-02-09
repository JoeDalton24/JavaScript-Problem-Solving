const containsNearbyAlmostDuplicate = require("./containsNearbyAlmostDuplicate");

describe("testing containsNearbyAlmostDuplicate", () => {
  test.skip("should return true", () => {
    const result = containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0);
    expect(result).toEqual(true);
  });

  test.skip("should return false", () => {
    const result = containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3);
    expect(result).toEqual(false);
  });

  test.skip("should return false because no array", () => {
    const result = containsNearbyAlmostDuplicate(
      { 1: 1, 5: 1, 9: 1, 1: 1, 5: 1, 9: 2 },
      2,
      3
    );
    expect(result).toEqual(false);
  });
});
