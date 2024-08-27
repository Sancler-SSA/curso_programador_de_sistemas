function parOuImpar(n) {
	let funcao;
	let resto = n % 2;


	if(resto == 1){
		funcao = "impar";
	}else { 
		funcao = "par";
		
	}
	return funcao;
}

console.log(parOuImpar(5));
console.log(parOuImpar(7));
console.log(parOuImpar(0));
console.log(parOuImpar(4));