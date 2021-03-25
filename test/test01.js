function tiers(index) {
	
	let result = '';

    for (let i = 0; i < index; i ++) {
        
		let floor = '';

        // Bucle para rellenar los espacios de la piramide
        for (let j = 1; j < index - i; j ++) {
            floor = floor + ' ';
        }

        // Bucle para pintar los asteriscos
        for (let j = 0; j < i + 1; j ++) {
            floor = floor + '*';
        }

        result += floor + '\n';
    }

    return result;
}
module.exports = tiers;
