//dice

function Dice(numberOfSides){
   this.roll = function(){
var roll = Math.floor(Math.random() * numberOfSides + 1)
return "Your las roll was " + roll;
}

}
