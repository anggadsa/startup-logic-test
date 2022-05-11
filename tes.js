function reverseNumber(number) {
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