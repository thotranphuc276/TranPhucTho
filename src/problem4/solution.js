"use strict";
function sum_to_n_a(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sum_to_n_b(n) {
    return (n * (n + 1)) / 2;
}
function sum_to_n_c(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sum_to_n_c(n - 1);
}
console.log(sum_to_n_a(5)); // Output: 15
console.log(sum_to_n_b(5)); // Output: 15
console.log(sum_to_n_c(5)); // Output: 15
console.log(sum_to_n_a(100)); // Output: 5050
console.log(sum_to_n_b(100)); // Output: 5050
console.log(sum_to_n_c(100)); // Output: 5050
