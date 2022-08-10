// * реалізувати алгоритм знаходження першого і
// останнього простого числа на заданому проміжку
// від а до b. перевіряти щоб проміжок був не більше
// 30 чисел (до прикладу 1…30, 10…40)
const a = 1;
const b = 10;

function isSimpleNumber(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function fiendFirstAndLastSimpleNumber(num1, num2) {
    const array = [];
    if (num2 - num1 > 30 || num1 > num2) return;

    for (let i = num1; i <= num2; i++) {
        if (isSimpleNumber(i)) {
            array.push(i);
        }
    }

    return {
        firstNumber: array[0],
        lastNumber: array[array.length - 1]
    };
}

console.log(fiendFirstAndLastSimpleNumber(a, b));


// * реалізувати алгоритм перевірки строки на паліндром

function checkPalindrome(str) {
    str = str.toLowerCase().replace(/\s+/g, '');
    return str === str.split('').reverse().join('');
}

console.log(checkPalindrome('Зараз'));
console.log(checkPalindrome('К   ор   о к'));
console.log(checkPalindrome('Кирик'));
console.log(checkPalindrome('Коник'));


