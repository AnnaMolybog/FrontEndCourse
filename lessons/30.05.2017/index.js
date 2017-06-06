//function divideArray() {
//    var nums = [1, 2, 3, 4, 5];
//    var evens = [];
//    var odds = [];
//    for (i = 0; i < nums.length; i++) {
//        if (nums[i] % 2 == 0) {
//            evens.push((nums[i]))
//        } else {
//            odds.push((nums[i]))
//        }
//    }
//    console.log(evens);
//    console.log(odds);
//}
//
//divideArray();

//var nums = [1, 2, 3, 4, 5]; //nums после применения map не меняется
//doubles = nums.map(function (el) {
//    return el * 8;
//});
//
//console.log(doubles);
//var evens = [];
//var odds = [];
//nums.forEach(function (el) {
//    el % 2 ? odds.push(el) : evens.push(el)
//});
//
//console.log(evens);
//console.log(odds);
//
//var numbersMoreThanThree = [];
//nums.filter(function (el) {
//    if (el > 3) {
//        numbersMoreThanThree.push(el);
//    }
//});
//
//console.log(numbersMoreThanThree);
//
//nums.forEach(function (el, i, arr) {
//    arr.push(0)
//});
//
//console.log(nums);

//var nums = [1, 2, 3, 4, 5];
//result = Math.max.apply(null, nums);
//
//console.log(result);

var a = 11;

/////0 < a < 10

resultMax = Math.max(0, a);
result = Math.min(10, resultMax);
console.log(result);