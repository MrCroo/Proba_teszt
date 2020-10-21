const tomb = [13,28,3,4,51,6,7];

let min = 20;
let max = 0;

for(let i = 0; i < tomb.length; i++) {
	if(tomb[i] > max) {
	max = tomb[i];
	}
	if(tomb[i] < min) {
	min = tomb[i];
	}
}

console.log('Max:',max, 'Min:', min);
