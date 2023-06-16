const arr = [1,2,3,1,2,3,4,5,6,4]

// // cách 1
// const newArr = new Set();

// for(i = 0; i < arr.length; i++){
//     newArr.add(arr[i])
// }

// console.log(newArr);

// cách 2
arr.sort();
for(i = 0; i < (arr.length-1); i++){
    for(j = i + 1; j < arr.length; j++){
        if(arr[i] === arr[j]){
        arr.splice(i, 1);
        }
    }
}
console.log(arr);