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
const chkBracket = (a, o, c) => {
	if (a.length === 0) return true
	let openB = 0
	let closeB = 0
	let other = 0
	let otherIn = 0
	for (let i = 0; i < a.length; i++) {
		if (a[i] === o) openB++
		else if (a[i] === c) {
			if (openB <= 0) return false
			if (otherIn % 2 !== 0) return false
			closeB++
			openB--
		}
		else if (openB > 0) otherIn++
		else other++
	}
	if (openB === 0 && (other % 2 === 0)) return true
	return false
}

const isValid = function (s) {
	let p = []
	let b = []
	let k = []
	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case '(':
			case ')':
				p.push(s[i])
				b.push('o')
				k.push('o')
				break

			case '[':
			case ']':
				b.push(s[i])
				p.push('o')
				k.push('o')
				break

			case '{':
			case '}':
				k.push(s[i])
				b.push('o')
				p.push('o')
				break

			default:
				break
		}
	}
	console.log(chkBracket(p, '(', ')'), chkBracket(b, '[', ']'), chkBracket(k, '{', '}'))
	return chkBracket(p, '(', ')') && chkBracket(b, '[', ']') && chkBracket(k, '{', '}')
}

// test
let s1 = '()[]{}' // true
let s2 = '{[]}()' // true
let s3 = '(]' 		// false
let s4 = '([)]' 	// false
let s5 = '{[()]}' // true
console.log('s1', isValid(s1))
console.log('s2', isValid(s2))
console.log('s3', isValid(s3))
console.log('s4', isValid(s4))
console.log('s5', isValid(s5))