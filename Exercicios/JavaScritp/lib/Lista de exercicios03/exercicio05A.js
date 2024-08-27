// 5. Calcule a soma de todos os números até N



function somatorio(n) {
	let soma = 0;

	let k = 1;
	while(k <= n){
	soma += k;
	k ++;}
	

	console.log(soma);
	return soma;
}
 console.log(somatorio(5));
