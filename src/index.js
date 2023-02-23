
function alone(arr){
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2) {
            arr2[i] = arr[i].sort((a, b) => b - a)
        }
        arr2[i] = arr[i]     
    }
    let arr3 = arr2.reduce((acc, cur) => {
        return acc.concat(cur)
    }, [])
    return arr3
}

module.exports = function towelSort (matrix) {
  return [];
}
