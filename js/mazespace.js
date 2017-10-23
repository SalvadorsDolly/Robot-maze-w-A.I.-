"use strict";

//spaces between walls

function mazeSpace(directions) {
	var i;
	for (i=0; i<directions.length; i+=1) {
		this[directions[i]] = false;
	}
	
}

mazeSpace.prototype.setWall = function(direction) {
	this[direction] = true;
}