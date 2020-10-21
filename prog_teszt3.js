const tomb = [1,2,3,4,5,6,7];
let paros = 0;
for(let i = 0; i< tomb.length; i++) {
	if(tomb[i] % 2 ===0) {
	paros++;
	}
	
};

console.log('Paros szamok a tombben:',paros);
