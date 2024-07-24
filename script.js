//Find the majority element
function majority(arr){
    arr.sort();
    let count=1;
    let max=0;
    let num;
    for(let i=1;i<arr.length;i++){
        if(arr[i]==arr[i-1])
            count++;
        else
        count=1;
        if(count>max)
            {
                max=count;
                num=arr[i];
            }
        }
    return num;
}
arr=[1,2,3,2,2,3,4,4,5];
console.log(majority(arr));

//First non-repeating character in a string
function first(str) {
    let arr = str.split('');
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        let c = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                c++;
            }
        }
        if (c === 1) {
            arr1.push(arr[i]);
        }
    }
    return arr1[0];
}

let str = "arumugam";
console.log(first(str));

//1.Array maniputgion using slice()
var arr = [1, 2, 3, 4, 5, 6];
var newarr = arr.slice(2, 5);
console.log(newarr);

//2.converting array into objects
var arr = [10, 12, 14, 16, 18];
var obj = arr.reduce(function (obj, item) {
    obj[item] = item;
    return obj;
    }, {});
console.log(obj);

//3.comparing two array of equality
function equal(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 3, 4];
let array3 = [1, 2, 3, 5];

console.log(arraysEqual(array1, array2));
console.log(arraysEqual(array1, array3));

//4.Removing array item by index
let arr4 = [1, 2, 3, 4, 5];
let ind = 2;

if (index > -1) {
    arr4.splice(ind, 1);
}

console.log(array);

//5.Inserting an item at specific position
let array = [1, 2, 3, 4, 5];
let index = 2;
let item = 99;

array.splice(index, 0, item);

console.log(array);
