//radio
function Radio(ownerName, signalType){
    this.name = ownerName;
    if (signalType === "AM" || signalType === "FM") {
        this.signalType = signalType
    }
}

Radio.prototype.setStation = function(num) {
    if (this.signalType === "AM") {
        if (num >= 535 && num <= 1705) {
           return this.station = num; 
        } else {
            return "Not in AM range";
        }
        
    } else if (this.signalType === "FM") {
        if (num >= 88 && num <= 108) {
            return this.station = num;
        } else {
            return "Not in FM range";
        }
        
    }
}

Radio.prototype.listen = function() {
	if (this.signalType === "AM") {
		if (this.station > 1400) {
			return "Good signal AM";
		} else { 
			return "Bad signal AM"
		} 
	} else if (this.signalType === "FM") {
		if (this.station > 90) {
			return "Good signal FM";
		} else {
			return "Bad signal FM"
		}
	}

}