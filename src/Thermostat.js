function Thermostat(){
  this._default = 20;
  this._temperature = this._default;
  this._minimum = 10;
  this._maximum = 25;
  this._powerSave = true;
}

Thermostat.prototype.currentTemperature = function(){
  return this._temperature;
};

Thermostat.prototype.increaseTempBy = function(degrees = 1){
  if(this._checkMaximum(degrees)){
    throw new Error("max temp is " + this._maximum);
  }
  this._temperature = this._temperature + degrees;
};

Thermostat.prototype.decreaseTempBy = function(degrees = 1){
  if(this._checkMinimum(degrees)){
    throw new Error("min temp is " + this._minimum);
  }
  this._temperature = this._temperature - degrees;
};

Thermostat.prototype._checkMinimum = function(degrees){
   return this._temperature - degrees < this._minimum;
};

Thermostat.prototype.getMinimum = function(){
  return this._minimum;
};

Thermostat.prototype.getMaximum = function(){
  return this._maximum;
};

Thermostat.prototype.getDefault = function(){
  return this._default;
};

Thermostat.prototype.turnOnPowerSave = function(){
  this._powerSave = true;
  this._maximum = 25;
};

Thermostat.prototype.turnOffPowerSave = function(){
  this._powerSave = false;
  this._maximum = 32;
};

Thermostat.prototype._checkMaximum = function(degrees){
  return this._temperature + degrees > this._maximum;
};

Thermostat.prototype.reset = function(){
  this._temperature = this._default;
};

Thermostat.prototype.energyUsage = function(){
  if(this._temperature < 18){
    return "low-usage";
  } else if(this._temperature < 25){
    return "medium-usage";
  } else {
    return "high-usage";
  }
};