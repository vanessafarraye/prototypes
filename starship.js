//starship
function Starship (model, name, topSpeed) {
this.model = model;
this.ownerName = name;
this.currentSpeed = 0;
this.topSpeed = topSpeed;
}

Starship.prototype.getTopSpeed = function() {
 return this.topSpeed
}

Starship.prototype.setTopSpeed = function(speed) {
this.topSpeed = speed
}

Starship.prototype.setAccelerateTo = function(speed) {
if (speed <= this.topSpeed) {
this.currentSpeed = speed;
} else { return "too fast";
}

}