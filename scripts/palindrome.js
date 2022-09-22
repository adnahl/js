const palindromeIndex = (s) => {
	l = s.length
	i = 0
	j = l - 1

	while (i < l) {
		if (s[i] !== s[j]) break
		i++
		j--
	}
	if (i > j) return -1

	a = i + 1
	b = j
	while (a < j && b > i + 1) {
		if (s[a] !== s[b]) return j
		a++
		b--
	}
	return i
}

console.log(palindromeIndex('baaa')) // 0
console.log(palindromeIndex('bbba')) // 3
console.log(palindromeIndex('aabaa')) // -1
console.log(palindromeIndex('hello olleh')) // -1
console.log(palindromeIndex('hello oleh')) // 3