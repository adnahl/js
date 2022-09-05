/**
 * IN: Two strings S and T.
 * T is generate by random shuffling string S and then adding one more
 * letter at a random position. Return the letter that was added to T.
 */
//  S='abbdd' T='dabadb' 	-> a
//  S='' 			T='y' 		 	-> y
//  S='aaaa'  T='aabaa' 	-> b
//  S='ae' 		T='aae' 		-> a

function findTheDifference(s, t) {
	if (s.length === 0) return t
	let count = {}
	for (let i = 0; i < t.length; i++) {
		count[t[i]] = (count[t[i]] || 0) + 1
	}
	for (let i = 0; i < s.length; i++) {
		count[s[i]] = (count[s[i]] || 0) + 1
	}
	let keys = Object.keys(count)
	let values = Object.values(count)
	for (let i = 0; i < keys.length; i++) {
		if (values[i] % 2 !== 0) return keys[i]
	}
}

// test
let find1 = ['abbdd', 'dabadb']
let find2 = ['', 'y']
let find3 = ['aaaa', 'aabaa']
let find4 = ['ae', 'aae']
let find5 = ['xyzx', 'xxyzw']
console.log(find1, findTheDifference(find1[0], find1[1]))
console.log(find2, findTheDifference(find2[0], find2[1]))
console.log(find3, findTheDifference(find3[0], find3[1]))
console.log(find4, findTheDifference(find4[0], find4[1]))
console.log(find5, findTheDifference(find5[0], find5[1]))