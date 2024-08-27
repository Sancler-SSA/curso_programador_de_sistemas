/* 1. Verifique se um número é positivo, negativo ou zero */
// function polaridade(a) {
// 	let funcao;



// 	if (a > 0) {
// 		funcao = "positivo";
// 	}
// 	else {
// 		funcao = "negativo";
// 	}

// 	if(a == 0){
// 		funcao = "zero";
// 	}

// 	return funcao;
// }

function polaridade(num){
	if(num == 0) return "zero";
	return Number(num) > 0 ? "positivo" :"negativo";
}
console.log(polaridade(4));
console.log(polaridade(3));
console.log(polaridade(0));
console.log(polaridade(-7));
console.log(polaridade("1110"));
console.log(polaridade("-987654321"));