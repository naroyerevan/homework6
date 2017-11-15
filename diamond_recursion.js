const stars = function (n, type) {
	if (n===0) {
		return "";
	}

	return type + stars(n-1, type); 
};

const spaces = function (n) {
	if (n===0) {
		return "";
	}
	
	return " " + spaces(n-1); 
};
var shift = false;

const starsAndSpaces = function(num,star,space,type) {
	if(num===0){
		return "";
	}
	console.log(spaces(space)+stars(star,type));
	if (space !== 0 && shift === false) {
		starsAndSpaces(num-1,star+2,space-1, type);}
		else if (space === 0 || shift === true) {
	  shift = true;
		starsAndSpaces(num-1,star-2,space+1, type);
	}
}


const diamond = function(length,type){
  if(length%2 ===0){
    length=length-1
  }
	starsAndSpaces(length,1,(length-1)/2,type);
}

diamond(70,"$");