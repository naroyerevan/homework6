const diamond = function(length, type) {
	if(length % 2 === 0) {
		length = length - 1;
	}

const starsAndSpaces = function(n, char) {
	let m = '';
	for(let i = 0; i < n; i++) {
  	m = m + char;
	}
	return m;
};

let spaces = (length-1)/2;
let stars = 1;

for(let i = 1; i <= length; i++) {
	console.log(starsAndSpaces(spaces, ' ') + starsAndSpaces(stars, type));
	if(i <= length/2) {
	spaces = spaces -1;
	stars = stars + 2;
	} 
	else {
	spaces = spaces + 1;
	stars = stars - 2;
	}
}
};
diamond(10,"*");