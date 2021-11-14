import {NotImplementedError} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let separator = '+';
    let addition = '';
    let additionSeparator = '|';
    if (options.hasOwnProperty('addition')) {
        addition = String(options.addition);
    }
    if (options.hasOwnProperty('additionSeparator')) {
        additionSeparator = options.additionSeparator;
    }
    if (options.hasOwnProperty('additionRepeatTimes')) {
        str += Array(options.additionRepeatTimes).fill((addition).split()).join(additionSeparator);
    } else {
        str += addition;
    }
    if (options.hasOwnProperty('separator')) {
        separator = options.separator;
    }
    if (options.hasOwnProperty('repeatTimes')) {
        return Array(options.repeatTimes).fill((str).split()).join(separator);
    } else {
        return str;
    }
}
