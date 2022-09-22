/**
 * Who is winner?
 * 
 * Input: <Array<Object>> // Object: { <name<string>, game<Array<number | string>> }
 * 
 * Rules:
 * - Numbers:
 * N > 0: added N points
 * N = 0: subtracted 1 point
 * N < 0: subtracted N points
 * - Strings:
 * u: last action is not valid
 * d: double result
 * e: if result is not even covert to the next even number (e.g. 23 -> 24, 22.05 -> 24)
 * i: round the result (e.g. 2.3 -> 2)
 * 
 * return <string> // The winner is XYZ with A points. Second place for WZX with B points.
 * 
 * Example:
 * arr = [
 * {
 * 		name: 'Roberto',
 * 		game: [21, 8, 'e', 'd', -2, 'i', 1.5]
 * 	},
 * 	{
 * 		name: 'Martha',
 * 		game: [54, 1, -4, 'd', 'e', 'd', 'u', 'u']
 * 	},
 * 	{
 * 		name: 'Mia',
 * 		game: [23, -1, 0, 34, 'd', 0, 0, 0, 'u']
 * 	}
 * ]
 * 
 * Roberto: 21(21) 8(29) e(30) d(60) -2(30) i(30) 1.5(31.5)
 * Martha: 54(54) 1(55) -4(13.75) d(27.5) e(28) d(56) u(28) u(56)
 * Mia: 23(23) -1(23) 0(22) 34(56) d(112) 0(111) 0(110) 0(109) u(110)
 * 
 * return: The winner is Mia with 110 points. Second place for Martha with 56 points.
 *  
 * */


