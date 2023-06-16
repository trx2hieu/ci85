const array = [1,7,9,2,5,3,8];

let sum = 10;
let result = [];

for(i = 0; i< (array.length - 1); i++){
    for(j = i + 1; j< array.length; j++){
        if(array[i] + array[j] === sum){
            result.push([array[i], array[j]])
        }
    }
}

console.log(result);