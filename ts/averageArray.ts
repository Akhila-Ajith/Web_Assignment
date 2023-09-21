//a number array
const numList = [5, 6, 7, 8, 9];
//mapping each elements to its sqaure value
const sqauredNumList = numList.map((num) => num * num);
//calculating the sum of all elements by iterating through the array
let sum = 0;
for (const num of sqauredNumList) {
    sum += num;
}
//displaying average
console.log(sum / sqauredNumList.length);