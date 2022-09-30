// function swap(arr, x, y) {
// 	let tpm = arr[x]
// 	arr[y] = arr[x]
// 	arr[x] = tpm
// }


// Bubble Sort
const bubbleSort = (arr) => {
	let sorted = false

	while (!sorted) {
		sorted = true
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				// swap
				let tpm = arr[i - 1]
				arr[i - 1] = arr[i]
				arr[i] = tpm
				sorted = false
			}
		}
	}

	return arr
}

// Insertion Sort
const insertSort = (arr) => {
	let len = arr.length
	let i = 1

	while (i < len) {
		let x = arr[i]
		let j = i - 1
		while (j >= 0 && arr[j] > x) {
			arr[j + 1] = arr[j]
			j = j - 1
		}
		arr[j + 1] = x
		i = i + 1
	}

	return arr
}

// Selection Sort
const selectionSort = (arr) => {
	let len = arr.length

	for (let i = 0; i < len - 1; i++) {
		let j_min = i
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[j_min]) {
				j_min = j
			}
		}
		if (j_min !== i) {
			// swap(arr, i, j_min)
			let tpm = arr[i]
			arr[i] = arr[j_min]
			arr[j_min] = tpm
		} else { }
	}

	return arr
}

// Merge Sort
const mergeSort = (arr) => {
	let len = arr.length
	if (len <= 1) return arr
	const mid = len / 2
	const left = arr.slice(0, mid)
	const right = arr.slice(mid, len)
	return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
	let res = []
	while (left.length || right.length) {
		if (left.length && right.length) {
			if (left[0] < right[0]) res.push(left.shift())
			else res.push(right.shift())
		}
		else if (left.length) res.push(left.shift())
		else res.push(right.shift())
	}
	return res
}


function sortAlgorithm(s, A) {
	let startTime = performance.now()
	let result = []
	switch (s) {
		case 'Bubble':
			result = bubbleSort([...A])
			break

		case 'Insert':
			result = insertSort([...A])
			break

		case 'Selection':
			result = selectionSort([...A])
			break

		case 'Merge':
			result = mergeSort([...A])
			break

		default:
			break
	}
	let endTime = performance.now()
	console.log({
		Method: s,
		Time: ((endTime - startTime).toFixed(2)).toString() + 'ms',
		Result: result
	})
}

/* * * * * * * * * *
 * Creating Array  *
 * * * * * * * * * */
let A = []
for (let i = 0; i < 5; i++) {
	A.push(Math.random() * 10)
}

console.log({ Array: A })
sortAlgorithm('Bubble', A)
sortAlgorithm('Insert', A)
sortAlgorithm('Selection', A)
sortAlgorithm('Merge', A)
