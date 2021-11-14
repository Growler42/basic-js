import {NotImplementedError} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    let result = [];
    let input = n.toString();
    input.split('').forEach((digit, index) => {
        let tempArr = input.split('');
        tempArr.splice(index, 1);
        result.push(Number(tempArr.join('')));
    })
    return result.sort((a, b) => b - a)[0];
}
