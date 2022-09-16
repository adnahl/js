/**
 * Matrix Game
 */

const getSumMatrix = (matrix) => {
	console.log('matrix', matrix)

	let len = matrix.length
	let n = len / 2
	let max = 0
	let sum = 0

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			max = 0
			max = Math.max(matrix[i][j], max)
			max = Math.max(matrix[i][len - j - 1], max)
			max = Math.max(matrix[len - i - 1][j], max)
			max = Math.max(matrix[len - i - 1][len - j - 1], max)
			sum += max
			console.log(matrix[i][j], matrix[i][len - j - 1], matrix[len - i - 1][j], matrix[len - i - 1][len - j - 1], { max, sum })
		}
	}
	return sum
}

let matrix = [
	[112, 42, 83, 119],
	[56, 125, 56, 49],
	[15, 78, 101, 43],
	[62, 98, 114, 108]
]
console.log(getSumMatrix(matrix))