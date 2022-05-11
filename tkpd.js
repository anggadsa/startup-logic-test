/*

// SOAL 1
// ===============================
function merge(l, r) {
    const arr1 = l
    const arr2 = r
    const arrLength = arr1.length + arr2.length
    let merge = [...arr1, ...arr2]
    return merge
}
console.log(merge([1,2,3], [4,5,6]))
// Jawaban [ 1, 2, 3, 4, 5, 6 ]
function mergeSort(arr) {
    let left = []
    let right = []
    let leftLength = 0;
    let rigthLength = 0;
    // let mergeSort = [...left, ...right]
    // let test = []

    if(arr.length % 2 !== 0){ 
        leftLength = leftLength + arr.length / 2 + 0.5
        rigthLength = leftLength
    }
    // LEFT ARRAY
    for(let i = 0; i < leftLength; i++){
        let numbers = arr[i] //take the number from arr one by one
        left[i] = numbers //push that number into test one by one
    }
    
    for( let i = 1; i< left.length; i++){
        for(let j = 0; j < i; j++) {
            if(left[i] < left[j]){
                let number = left[i]
                left[i] = left[j]
                left[j] = number
            }
            
        }
    }

    // RIGHT ARRAY
    let j = 0;
    for(let i = rigthLength; i < arr.length; i++) {
        let number = arr[i]
        right[j] = number
        j = j + 1
    }
    
    for( let i = 1; i< right.length; i++){
        for(let j = 0; j < i; j++) {
            if(right[i] < right[j]){
                let number = right[i]
                right[i] = right[j]
                right[j] = number
            }
            
        }
    }
    let mergeSort = [...left, ...right]
    return mergeSort
}   
const arr = [2, 7, 3, 6, 9, 4, 8];
console.log(mergeSort(arr));
// Jawaban [ 2, 3, 6, 7, 4, 8, 9 ]
// ===============================
// SOAL 2
// // ===============================
function isPrimeNumber(n) {
    if (n === 1) return (`Is not prime number`)
    let prime = 0
    for(i = 1; i <= n; i++) {
        if(n % 2 == 0) {
            prime = prime + 1
        }
    }  
    if(prime === 0) {
        return (`This is prime number`)
    } else {
        return (`Is not prime number`)
    } 
}
console.log(isPrimeNumber(11));
// // ===============================
// SOAL 3
// // ===============================
function reverseNumber(number) {
    // Kerjakan soal ini hanya menggunakan built-in yang berkaitan dengan Number (seperti Math) 
    // tidak menggunakan yang lain seperti built-in String, Array, Object
    if(isNaN(number) || typeof number == `string`)return (`This is not a number`)
    let num = number
    // console.log(typeof number)
    let reverse = 0
    let str = ``;
    while (num > 0) {
        reverse = num % 10  
        str = str + reverse
        num = Math.trunc(num / 10)
    }

    return +str
}
console.log(reverseNumber(12345));
// // ===============================
// Soal 4 
// // ===============================
function duplicateNumber (arr) {
    let duplicate = [];
    let duplicateIndex = 0;
    let highestNumber = 0;
    let highestIndex = 0;
    for (let i = 0; i < arr.length ; i++){
        for( let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]){
                let duplicateNumber = arr[i]
                duplicate[duplicateIndex] = duplicateNumber
                duplicateIndex = duplicateIndex + 1 
            }
            // console.log(arr[i], arr[j])
        }
    }

    // Find highest value of duplicate number
    for(let k = 0; k < duplicate.length; k++) {
        for(let l = k + 1; l < duplicate.length; l++) {
            if(duplicate[k] < duplicate[l]){
                highestNumber = duplicate[l]
            }
        }
    }

    // Find the first index of highest value duplicate number
    for(let m = 0; m < arr.length; m++) {
        if(arr[m] === highestNumber) {
            highestIndex = m;
            m = arr.length - 1
        }
    }
    let string = `Index ke ${highestIndex}`
    return string
}
// arr = [1, 2, 2, 6, 4, 4]
console.log(duplicateNumber([1, 2, 2, 6, 4, 4]))
// jawaban = index ke - 4
// cari di index berapa bilangan yang duplicate, jika ada lebh dari 1 yang duplicate ambil bilangan yang paling besar
// // ===============================
// Soal 5
// // ===============================
function includeString (stringA, stringB) {
    let firstIndex = 0;
    let result = 0;
    let string = ``;
    
    // find the match index
    for (let i = 0; i < stringA.length; i++){
        if(stringA[i] === stringB.charAt(firstIndex)){
            firstIndex = firstIndex + 1
            // string = string + stringA.charAt(i)
        } else {
            firstIndex = 0 // if index 2 not match firstIndex will be 0
        }
    }

    if(firstIndex === stringB.length){  
        for (let j = 0; j < stringA.length; j++) {
            if(stringA.charAt(j) === stringB.charAt(0)){
                result = j
            } 
        }
        return (`Index ke ${result}`)
    } else {
        return (`String A doesn't include string B`)
    }
    // return firstIndex
}
stringA = 'beruang'
stringB = 'uang'
console.log(includeString(stringA, stringB))
// jawaban = index ke 3
// apakah value stringB ada di stringA, jika ada return index nya jika tidak return -1
// // ===============================
**/
// Soal 6
// // ===============================
function pyramidAsterisk (arr){
    let string = ``;
    let reverse = ``;

    for(let i = 1; i < arr.length +1; i++){ 
        let tempString = ``; //temporary string container
        for(let j = 0; j < i; j++){ 
            tempString = tempString + arr[j]
        }
        
        for(let k = tempString.length - 1; k >= 0; k--) { //reverse loop tempString ang assign to string variables
            string = string + tempString[k]
        }
        string = string + `\n`
    }

    return string
}

// arr = [5, 4, 3, 2, 1]
console.log(pyramidAsterisk([5, 4, 3, 2, 1]))
// buat pyramid segitiga seperti berikut
// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5
// // ===============================