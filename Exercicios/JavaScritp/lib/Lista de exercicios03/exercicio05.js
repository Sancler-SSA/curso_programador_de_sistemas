function somatorio(N) {
	let total = 0;

	for(let k=1; k <= N; k++){
		total += k;
	}

	return total;
}

console.log(somatorio(5));
console.log(somatorio(10));
console.log(somatorio(1));
console.log(somatorio(64));
console.log(somatorio(0));