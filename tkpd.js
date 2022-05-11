// // ===============================
// function merge(l, r) {
//     const arr1 = l
//     const arr2 = r
//     const arrLength = arr1.length + arr2.length
//     let merge = [...arr1, ...arr2]
//     return merge
// }
// console.log(merge([1,2,3], [4,5,6]))

// function mergeSort(arr) {
//     let left = []
//     let right = []
//     let leftLength = 0;
//     let rigthLength = 0;
//     // let mergeSort = [...left, ...right]
//     // let test = []

//     if(arr.length % 2 !== 0){ 
//         leftLength = leftLength + arr.length / 2 + 0.5
//         rigthLength = leftLength
//     }
//     // LEFT ARRAY
//     for(let i = 0; i < leftLength; i++){
//         let numbers = arr[i] //take the number from arr one by one
//         left[i] = numbers //push that number into test one by one
//     }
    
//     for( let i = 1; i< left.length; i++){
//         for(let j = 0; j < i; j++) {
//             if(left[i] < left[j]){
//                 let number = left[i]
//                 left[i] = left[j]
//                 left[j] = number
//             }
            
//         }
//     }

//     // RIGHT ARRAY
//     let j = 0;
//     for(let i = rigthLength; i < arr.length; i++) {
//         let number = arr[i]
//         right[j] = number
//         j = j + 1
//     }
    
//     for( let i = 1; i< right.length; i++){
//         for(let j = 0; j < i; j++) {
//             if(right[i] < right[j]){
//                 let number = right[i]
//                 right[i] = right[j]
//                 right[j] = number
//             }
            
//         }
//     }
//     let mergeSort = [...left, ...right]
//     return mergeSort
// }   
// const arr = [2, 7, 3, 6, 9, 4, 8];
// console.log(mergeSort(arr));
// // ===============================

// // // ===============================
// function isPrimeNumber(n) {
//     if (n === 1) return (`Is not prime number`)
//     let prime = 0
//     for(i = 1; i <= n; i++) {
//         if(n % 2 == 0) {
//             prime = prime + 1
//         }
//     }  
//     if(prime === 0) {
//         return (`This is prime number`)
//     } else {
//         return (`Is not prime number`)
//     } 
// }
// console.log(isPrimeNumber(11));
// // // ===============================

// // // ===============================
// function reverseNumber(number) {
//     // Kerjakan soal ini hanya menggunakan built-in yang berkaitan dengan Number (seperti Math) 
//     // tidak menggunakan yang lain seperti built-in String, Array, Object
//     if(isNaN(number) || typeof number == `string`)return (`This is not a number`)
//     let num = number
//     // console.log(typeof number)
//     let reverse = 0
//     let str = ``;
//     while (num > 0) {
//         reverse = num % 10  
//         str = str + reverse
//         num = Math.trunc(num / 10)
//     }

//     return +str
// }
// console.log(reverseNumber(12345));
// // // ===============================

// Soal 4 
function duplicateNumber (arr) {
    let duplicate = [];

    for(let i = 0; i < arr.length; i++ ){

        if(arr[i] == arr[i+1]) {
            for(let j = 0; j <= 1; i++ ){
                let number = arr[i]
                duplicate[j] = number
            }
        }
    }
    return duplicate
    // Highest number
    // let highestNumber = Math.max(...duplicate)

    // return Math.max(...duplicate)
    // return duplicate
}
// arr = [1, 2, 2, 6, 4, 4]
console.log(duplicateNumber([1, 2, 2, 6, 4, 4]))
// jawaban = index ke - 4
// cari di index berapa bilangan yang duplicate, jika ada lebh dari 1 yang duplicate ambil bilangan yang paling besar

// Soal 5
// stringA = 'beruang'
// stringB = 'uang'
// jawaban = index ke 3
// apakah value stringB ada di stringA, jika ada return index nya jika tidak return -1

// Soal 6
// arr = [5, 4, 3, 2, 1]
// buat pyramid segitiga seperti berikut
// 5
// 4 5
// 3 4 5
// 2 3 4 5
// 1 2 3 4 5