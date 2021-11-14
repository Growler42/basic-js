import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {

    constructor(isDirect) {
        if (arguments.length === 0) isDirect = true;
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');

        let result = [];
        message = message.toUpperCase();
        key = key.toUpperCase();

        for (let i = 0, j = 0; i < message.length; i++) {
            if (message[i] >= 'A' && message[i] <= 'Z') {
                let charCode = (
                    (message[i].charCodeAt(0) - 65)
                    + (key[j % key.length].charCodeAt(0) - 65)
                ) % 26 + 65;

                result.push(String.fromCharCode(charCode));
                j++;
            } else result.push(message[i]);
        }

        if (this.isDirect) return result.join('');
        else return result.reverse().join('');
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error('Incorrect arguments!');

        let result = [];
        message = message.toUpperCase();
        key = key.toUpperCase();

        for (let i = 0, j = 0; i < message.length; i++) {
            if (message[i] >= 'A' && message[i] <= 'Z') {
                let charCode = (
                    (message[i].charCodeAt(0) - 65)
                    + (26 - (key[j % key.length].charCodeAt(0) - 65))
                ) % 26 + 65;

                result.push(String.fromCharCode(charCode));
                j++;
            } else result.push(message[i]);
        }

        if (this.isDirect) return result.join('');
        else return result.reverse().join('');
    }
}