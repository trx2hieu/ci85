const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];

const newArr = [];

for(i = 0; i < arr2.length; i++){
    if(arr1.find(element => element === arr2[i]) != null){
        newArr.push(arr2[i])
    }
}

console.log(newArr);