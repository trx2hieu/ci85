const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];

const myFunc = (inputArr) => {
    let result = [];
    for(i = 0; i < inputArr.length-1; i++){
        for(j = i+1; j < inputArr.length; j++){
            if (inputArr[i] === inputArr[j]){
                if(!result.includes(inputArr[j])){
                    result.push(inputArr[j]);
                }
            }
        }
    }
    return result;
}


const arr2 = myFunc(arr1); // [2,3,1,5]
console.log(arr2);