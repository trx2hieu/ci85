const array1 = [1,2,3,4,5,6,7,9,0];
const array2 = [3,4,8,9,12,0];

const compare = (a,b) => {
    let result = [];
    for(i = 0; i < a.length; i++){
        for(j = 0; j < b.length; j++){
            if (a[i] === b[j]){
                result.push(b[j]);
            }
        }
    }
    console.log(result);
}

compare (array1, array2)