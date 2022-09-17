// BRACKETS
// s contain just the characters ( ) [ ] { } determine if input string is valid
/**
 * @param {string}
 * @return {boolean}
 */

/**
 * @param a {Array<string>}
 * @param o {string} open bracket
 * @param c {string} close bracket
 */
const chkBracket = (a, o, c, otherArr) => {
	if (a.length === 0) return true
	let openB = 0
	let otherOpenBin = 0
	let otherOpenBout = 0

	for (let i = 0; i < a.length; i++) {
		if (a[i] === o) openB++
		else if (a[i] === c) {
			if (openB < 1) return false
			if (otherOpenBin > 0) return false
			openB--
		}
		else if (otherArr[i] === 'o') {
			if (openB > 0) otherOpenBin++
			else otherOpenBout++
		}
		else {
			if (openB > 0) otherOpenBin--
			else otherOpenBout--
		}
	}

	if (openB === 0 && otherOpenBin === 0 && otherOpenBout === 0) return true
	return false
}

const isValid = function (s) {
	let other = []

	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case '(':
			case '[':
			case '{':
				other.push('o')
				break

			case ']':
			case ')':
			case '}':
				other.push('c')
				break

			default:
				break
		}
	}
	// console.log(other)
	return chkBracket(s, '(', ')', other) && chkBracket(s, '[', ']', other) && chkBracket(s, '{', '}', other)
}

// test
let s1 = '()[]{}' 	// true
let s2 = '{[]}()' 	// true
let s3 = '(]' 			// false
let s4 = '([)]' 		// false
let s5 = '{[()]}' 	// true
let s = '[([[)]]]'	// false
console.log('s1', isValid(s1))
console.log('s2', isValid(s2))
console.log('s3', isValid(s3))
console.log('s4', isValid(s4))
console.log('s5', isValid(s5))
console.log('s', isValid(s))