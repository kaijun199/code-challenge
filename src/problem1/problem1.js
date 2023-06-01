var sum_to_n_a = function(n) {
    // your code here
    let sum = 0
    for (let i = 1; i < n + 1; i++) {
        sum += i
    }
    return sum;
};

var sum_to_n_b = function(n) {
    // your code here
    let sum = 0
    let i = 1;
    while (i < n + 1) {
        sum += i
        i++;
    }
    return sum;
};

var sum_to_n_c = function(n) {
    // your code here
    let sum = 0;
    no_of_sets = Math.floor(n/2);
    if (n % 2 > 0){
        //n is odd num
        sum = (n+1) * no_of_sets + (no_of_sets + 1)
    }else{
        //n is even num
        sum = (n+1) * no_of_sets;
    }
    return sum;

};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));