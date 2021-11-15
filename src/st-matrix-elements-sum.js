import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    let resultArr = [];
    matrix.forEach((el, i) => {
        el.forEach((el, j) => {
            if (matrix[i][j] === 0 && i > 0) {
                if (i + 1 < matrix.length) matrix[i + 1][j] = 0;
            } else resultArr.push(matrix[i][j]);
        });
    });
    return resultArr.reduce((sum, el) => sum + el);
}