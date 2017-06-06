//////////////Exercise 1/////////////////
function grantAdminRole() {
    if (this.result.age >= 18) {
        return this.result.isAdmin = true;
    }
    return this.result.isAdmin = false;
}
var user = {
    grant: grantAdminRole,
    result: {
        age: 14,
        isAdmin: null
    }
};
user.grant();
console.log(user.result);

//////////////Exercise 2/////////////////
//////////////Exercise 3/////////////////
var numsObject = {
    nums: [6, 4, 9, 3, 4, 2]
};
function numObject() {
    return numsObject;
}

var nums2 = numObject();
nums2.numsObject.nums.sort();
console.log(numObject().numsObject.nums);
console.log(nums2);