/*
 * The function is expected to return a STRING_ARRAY.  		- Ex. ['YES', 'NO', 'NO']
 * The function accepts STRING_ARRAY braces as parameter. - Ex. ['({[]})', '{[})', '({']
 */

/**
 * 
 * @param {string} s // the string
 * @param {chart} o  // the open symbol ( [ {
 * @param {chart} c  // the close symbol ) ] }
 * @param {array} a  // indicator's array of open or close brace
 * @returns boolean
 */
const chkBraces = (s, o, c, a) => {
	if (s.length === 0) return false
	let openBrace = 0
	let otherOpenBraceOutside = 0
	let otherOpenBraceInside = 0

	for (let i = 0; i < s.length; i++) {
		if (s[i] === o) openBrace++
		else if (s[i] === c) {
			if (openBrace < 1) return false
			openBrace--
		}
		else if (a[i] === 'o') {
			if (openBrace > 0) otherOpenBraceInside++
			else otherOpenBraceOutside++
		}
		// a[i] === 'c'
		else {
			if (openBrace > 0) {
				if (otherOpenBraceInside < 1) return false
				otherOpenBraceInside--
			}
			else {
				if (otherOpenBraceOutside < 1) return false
				otherOpenBraceOutside--
			}
		}
	}

	if (openBrace === 0 && otherOpenBraceOutside === 0 && otherOpenBraceInside === 0) return true
	return false
}

const isValid = (s) => {
	let a = []
	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case '(':
			case '[':
			case '{':
				a.push('o') // open
				break

			case ')':
			case ']':
			case '}':
				a.push('c') // close
				break

		}
	}
	return chkBraces(s, '(', ')', a) && chkBraces(s, '[', ']', a) && chkBraces(s, '{', '}', a)
}

function matchingBraces(braces) {
	let res = []
	for (let i = 0; i < braces.length; i++) {
		if (isValid(braces[i])) res.push('YES')
		else res.push('NO')
	}
	return res
}

let arr = ['()[]{}', '({[])}', '(({{(({}))}}))', '{([])}', '[[([)]]]', '[{[{}]}]', '([{', '{[]})', '{', '(]']
// YES, NO, YES, YES, NO, YES, NO, NO, NO, NO
console.log(matchingBraces(arr))