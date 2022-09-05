const isLetter = (letter) => {
	return letter.length === 1 && letter.match(/[a-z]/i)
}

/**
 * Reverse order string but keep special characters at the same position
 */
const reverseOnlyLetters = (s) => {
	let result = []
	let specialIndex = []
	let special = []

	for (let i = 0; i < s.length; i++) {
		if (!isLetter(s[i])) {
			specialIndex.push(i)
			special.push(s[i])
		}
	}

	for (let i = s.length - 1; i >= 0; i--) {
		if (isLetter(s[i])) result.push(s[i])
	}

	for (let i = 0; i < s.length; i++) {
		result.splice(specialIndex[i], 0, special[i])
	}

	return result.join().replaceAll(',', '')
}

// test
let str1 = 'a-gh+*A*uP' // P-uA+*h*ga
let str2 = '2r*-we+we+' // ew*-ew+r2+
let str3 = 'a//A++CduA' // A//u++dCAa
let str4 = '****TYUaAe' // ****aAaUYTPu
console.log(str1, ' - ', reverseOnlyLetters(str1))
console.log(str2, ' - ', reverseOnlyLetters(str2))
console.log(str3, ' - ', reverseOnlyLetters(str3))
console.log(str4, ' - ', reverseOnlyLetters(str4))