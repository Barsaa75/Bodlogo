//water

// const ihUtga = function (Giga) {
//   let ezlehuun = 0,
//     i = 0,
//     j = Giga.length - 1;
//   while (i < j) {
//     ezlehuun = Math.max(ezlehuun, Math.min(Giga[i], Giga[j]) * (j - i));
//     Giga[i] <= Giga[j] ? i++ : j--;
//   }
//   console.log(ezlehuun);
// };
// ihUtga([2, 4, 9, 2, 4, 3]);

// .     0, 1, 2, 3, 4, 5, 6, 7, 8

//three sum

const threeSum = function (nums) {
  let solutions = [];
  //target = 0
  nums.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      let sum = -nums[i];
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          solutions.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] == nums[high - 1]) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] > sum) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  console.log(solutions);
};

threeSum([1, 2, 3, -3, -2, 1, 2, -1], 0);
