function merge(arr) {
    let mergeSort = arr;
    let container = []
    for( let i = 1; i< mergeSort.length; i++){
        for(let j = 0; j < i; j++) {
            if(mergeSort[i] < mergeSort[j]){
                let number = mergeSort[i]
                mergeSort[i] = mergeSort[j]
                mergeSort[j] = number
            }
            
        }
    }

    return mergeSort
}
console.log(merge([3,2,1]))