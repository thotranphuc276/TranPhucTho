// Complexity:
// Time Complexity: O(n) - The loop runs n times.
// Space Complexity: O(1) - Only a single `sum` variable is used.
// Efficiency: Moderately efficient for large n due to linear time complexity.
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Complexity:
// Time Complexity: O(1) - Computation is done in constant time.
// Space Complexity: O(1) - No additional memory is used.
// Efficiency: Highly efficient for all values of n because it executes in constant time.
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

// Complexity:
// Time Complexity: O(n) - The function is called recursively n times.
// Space Complexity: O(n) - Each recursive call adds a layer to the call stack.
// Efficiency: Least efficient for large n due to high space usage and potential for stack overflow.
function sum_to_n_c(n: number): number {
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
