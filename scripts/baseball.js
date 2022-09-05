const double = (arr) => {
	let tmp = arr.reduce((p, c) => { return p + c })
	return tmp * 2
}

/**
 * @param {string, array}
 * @return {number}
*/
const Ops = (name, ops) => {
	if (!Array.isArray(ops)) return 0
	let a = []
	const len = ops.length
	if (len === 1) return ops[0]
	for (let i = 0; i < len; i++) {
		if (Number(ops[i])) a.push(Number(ops[i]))
		else if (ops[i] === '+') a.push(parseInt(a[a.length - 1] + a[a.length - 2]))
		else if (ops[i] === 'D' || ops[i] === 'd') a.push(double(a))
		else if (ops[i] === 'C' || ops[i] === 'c') a.pop()
	}
	if (a.length === 0) return 0
	return a.reduce((allPrev, cur) => { return allPrev + cur })
}

// test
let a1 = ['2', '5', '12', 'C', '20', 'C', 'D']
let a2 = ['2', 'C', '20', 'C']
let a3 = ['2', '5', 'D', '+', 'D', 'D']
let a4 = ['2', '1', '1', '+', '+', '+']
console.log(Ops('a1', a1))
console.log(Ops('a2', a2))
console.log(Ops('a3', a3))
console.log(Ops('a4', a4))