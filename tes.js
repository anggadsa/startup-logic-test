function pyramidAsterisk (arr){
    let string = ``;
    let reverse = ``;
    // reverse 
    for(let j = arr.length -1; j >= 0; j--) {
        reverse = reverse + arr[j]
    }
 
    
    // V2
    for(let i = 1; i <= reverse.length; i++) {
        let decrement = reverse.length;
        for(let j = 0; j < i; j++) {
            decrement = decrement - 1
            string = string + reverse[decrement]
        }
        string = string + `\n`
    }


    return string
}

// arr = [5, 4, 3, 2, 1]
console.log(pyramidAsterisk([5, 4, 3, 2, 1]))