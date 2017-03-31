/*var myRover = {
  location: [0,0],
  direction: 'N'
};*/
function rover(location,direction){
	self = this;
	this.location = [0,0];
	this.direction = 'N';
}
function move(command) {
    var xIncrease = 0, yIncrease = 0;
    if (self.direction == 'N') { //Norte
        yIncrease = -1;
    } else if (self.direction == 'E') { // Este
        xIncrease = 1;
    } else if (self.direction == 'S') { // Sur
        yIncrease = 1;
    } else if (self.direction == 'W') { // Oeste
        xIncrease = -1;
    }
    if (command == 'b') { // Marcha atrás
          xIncrease *= -1;
          yIncrease *= -1;
    }
    if ( (self.location[0]+ xIncrease >= 10 ) || (self.location[0]+xIncrease <= -1) ){
      // se sale de array, no hacemos nada
    }else{
      self.location[0]= self.location + xIncrease;
    }
    if ( (self.location[1]+ yIncrease >= 10 ) || (self.location[1]+ yIncrease <= -1) ){
      // se sale de array, no hacemos nada
    }else{
      self.location[1]= self.location + yIncrease;
    }
  }
//para girar
  function direction(siguienteDirection){
    var array = ['N','E','S','W'];
    if (siguienteDirection == 'R'){

    	for (i=0 ; i<=3 ;i++){
    		if (i == 3){
    			self.direction = array[0];
    		}
    		if(array[i] == self.direction){
    			self.direction = array[i++];
    		}
    	}
    }else if(siguienteDirection == 'L'){
    	for(i=3 ; i>=0 ; i--){
    		if(i===0){
    			self.direction = array[3];
    		}
    		if (array[i] == self.direction){
    		}
    	}

    }
  }
var gh = new rover();
var entradaFoB;
var entradaLoR;

while (entradaFoB != 'Z') {
  console.log(gh.location);
  console.log(gh.direction);
  console.log('Introduzca F o B o Z');
  console.read(entradaFoB);
  move(entradaFoB);
  console.log(gh.location);
  console.log('Introduzca una direccion');
  console.read(entradaLoR);
  direction(entradaLoR);
}
