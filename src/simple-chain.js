import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
    chainStr: '',
    getLength() {
        return this.chainStr.split('~~').length;
    },
    addLink(value) {
        if (this.chainStr.length !== 0) {
            this.chainStr += '~~';
        }
        this.chainStr += `( ${value} )`;
        return this;
    },
    removeLink(position) {
        let arr = this.chainStr.split('~~');
        if (position < 1 || position > arr.length || !Number.isInteger(position)) {
            this.chainStr = '';
            throw  new Error(`You can't remove incorrect link!`);
        }
        arr.splice(position - 1, 1);
        this.chainStr = arr.join('~~');
        return this;
    },
    reverseChain() {
        this.chainStr = this.chainStr.split('~~').reverse().join('~~');
        return this;
    },
    finishChain() {
        let tempStr = this.chainStr;
        this.chainStr = '';
        return tempStr;
    }
};
