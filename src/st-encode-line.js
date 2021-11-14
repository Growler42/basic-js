import {NotImplementedError} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    const resArr = [];
    for (let i = 0; i < str.length; i++) {
        let count = 1;
        while (str[i] === str[i + 1] && i < str.length) {
            count++;
            i++;
        }
        if (count > 1) resArr.push(count);
        resArr.push(str[i]);
    }
    return resArr.join('');
}