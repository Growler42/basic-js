import {NotImplementedError} from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    let res = [];
    matrix.forEach((el, i) => {
        let arr = [];
        el.forEach((el, j) => {
            let mineCount = 0;

            if (i > 0 && matrix[i - 1][j]) mineCount++;
            if (i > 0 && j < matrix[i].length - 1 && matrix[i - 1][j + 1]) mineCount++;
            if (j < matrix[i].length - 1 && matrix[i][j + 1]) mineCount++;
            if (i < matrix.length - 1 && j < matrix[i].length - 1 && matrix[i + 1][j + 1]) mineCount++;
            if (i < matrix.length - 1 && matrix[i + 1][j]) mineCount++;
            if (i < matrix.length - 1 && j > 0 && matrix[i + 1][j - 1]) mineCount++;
            if (j > 0 && matrix[i][j - 1]) mineCount++;
            if (i > 0 && j > 0 && matrix[i - 1][j - 1]) mineCount++;

            arr.push(mineCount);
        });
        res.push(arr);
    });
    return res;
}