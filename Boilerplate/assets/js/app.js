// We receive a number and want to return the sum of all its digits
// as we have to say whether the sum is even or odd

// 8234 -> 17
// 11 -> 2

function oddOrEven(number) {
    let numberArray = number.toString().split('');
    let result = 0;

    numberArray.forEach(numberString => {
        result += Number(numberString);
    })

    console.log(result);
    console.log(numberArray);

// 'can be done with the method reduce')

    result = numberArray.reduce((acc, curr) =>{
        return acc += Number(curr);
    }, 0);
    console.log(result);

    if(result % 2){
        return 'odd number'
    } else {
        return 'even number';
    }

    return result % 2 ? 'odd number' : 'even number'
}

console.log(oddOrEven(11));
console.log(oddOrEven(36));
console.log(oddOrEven(4213624215136134));

console.log('///////////////////////////////////////////////////////////////////////');

function isTruthyArray(arr) {
    let flag = true;
    
    arr.forEach(element => {
        if(!element){
            flag = false;
        }
    });
    console.log(flag);
    return flag;

    return arr.every(element => element);
    return !arr.some(element => !element);
}

console.log(isTruthyArray([2, 'siomga', 'domat', {}, [], false, 'Gosho', 24214]));
console.log(isTruthyArray([true, true]));
console.log(isTruthyArray([true, false, true]));
console.log(isTruthyArray([true, false, NaN]));
console.log(isTruthyArray([true, false, NaN, true]));


console.log('///////////////////////////////////////////////////////////////////////');

for(let i = 0; i < 4; i++){
    setTimeout(() => console.log(i), 100);
}


for(var i = 0; i < 4; i++){
    setTimeout(() => console.log(i), 1000);
}

