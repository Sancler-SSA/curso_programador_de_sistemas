function esfera(r) {
		let volume = 4 * 3.14159 * (r**3) / 3;
			let volumeArredondado = volume.toFixed(4);
		
		return volumeArredondado;

}

	console.log(esfera(3));
	console.log(esfera(5));
	console.log(esfera(1.5));