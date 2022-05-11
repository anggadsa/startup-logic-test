// Find Smallest Positive Binary

// Given set of array of integer
// Find the smallest positive number possibility from array of integer as N, where N : 0 < N < 500000
// and then returns the numbers of bits set to 1 in the binary respresentation of the number N

// For example given: [1, 3, 2, 6, 4, 1, 2], the function should return 2.
// Found smallest positive number from array of integer (N) is 5.
// Binary representation of N is 101, it cointains 2 bits set to 1.

// another example given: [-1, -4], the function should return 1, where N is 1 and binary representation of N is 1.
// Koinworks allow built-in function

// [1, 3, 2, 6, 4, 1, 2, 7, 8, 10]

/* 
1. Menemukan angka yang tidak ada pada rentang dari number yang terkecil sampai yang terbesar pada sebuah array 
[1, 3, 2, 6, 4, 1, 2, 7, 8, 10] berarti 1-10 yang tidak adalah angka 5
2. Menemukan angka positip terkecil yang double pertama misall:
[1, 3, 2, 6, 4, 1, 2, 7, 8, 10] berarti 2
3. Ganti angka negatif menjadi positif misal:
[-1, -3, 2, 6, 4, 1, 2, 7, 8, 10] menjadi [1, 3, 2, 6, 4, 1, 2, 7, 8, 10]

**/