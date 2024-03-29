'use strict'

function Thermostat(){
  this._DEFAULT = 20;
  this._temperature = this._DEFAULT;
  this._MINIMUM = 10;
  this._MAXIMUM = 25;
  this._TEMP_MEDIUM_ENERGY = 18;
  this._TEMP_HIGH_ENERGY = 25;
  this._powerSave = true;
}

Thermostat.prototype.currentTemperature = function(){
  return this._temperature;
};

Thermostat.prototype.increaseTempBy = function(degrees = 1){
  if(this._checkMaximum(degrees)){
    throw new Error("max temp is " + this._MAXIMUM);
  }
  this._temperature = this._temperature + degrees;
};

Thermostat.prototype.decreaseTempBy = function(degrees = 1){
  if(this._checkMinimum(degrees)){
    throw new Error("min temp is " + this._MINIMUM);
  }
  this._temperature = this._temperature - degrees;
};

Thermostat.prototype._checkMinimum = function(degrees){
   return this._temperature - degrees < this._MINIMUM;
};

Thermostat.prototype.getMinimum = function(){
  return this._MINIMUM;
};

Thermostat.prototype.getMaximum = function(){
  return this._MAXIMUM;
};

Thermostat.prototype.getDefault = function(){
  return this._DEFAULT;
};

Thermostat.prototype.turnOnPowerSave = function(){
  this._powerSave = true;
  this._MAXIMUM = 25;
};

Thermostat.prototype.turnOffPowerSave = function(){
  this._powerSave = false;
  this._MAXIMUM = 32;
};

Thermostat.prototype._checkMaximum = function(degrees){
  return this._temperature + degrees > this._MAXIMUM;
};

Thermostat.prototype.reset = function(){
  this._temperature = this._DEFAULT;
};

Thermostat.prototype.isPowerSave = function(){
  if(this._powerSave){
    return "on";
  } else {
    return "off";
  }
};

Thermostat.prototype.energyUsage = function(){
  if(this._temperature < this._TEMP_MEDIUM_ENERGY){
    return "low-usage";
  } else if(this._temperature < this._TEMP_HIGH_ENERGY){
    return "medium-usage";
  } else {
    return "high-usage";
  }
};