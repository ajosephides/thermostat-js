describe("Thermostat", function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at a default temperature of 20', function(){
    expect(thermostat.currentTemperature()).toEqual(thermostat.getDefault());
  });

  it('increases the temperature by 1', function(){
    thermostat.increaseTempBy();
    expect(thermostat.currentTemperature()).toBe(21);
  });

  it('decreases the temperature by 1', function(){
    thermostat.decreaseTempBy();
    expect(thermostat.currentTemperature()).toBe(19);
  });

  it('increase the temperature by 5', function(){
    thermostat.increaseTempBy(5);
    expect(thermostat.currentTemperature()).toBe(25);
  });

  it('decreses the temperature by 7', function(){
    thermostat.decreaseTempBy(7);
    expect(thermostat.currentTemperature()).toBe(13);
  });

  it('will not allow a temperature below 10', function(){
    expect(function() {
      thermostat.decreaseTempBy(11);
    }).toThrowError("min temp is " + thermostat.getMinimum());
  });

  it('will not allow a temperature higher than 25 if powersave is on', function(){
    thermostat.turnOnPowerSave();
    expect(function() {
      thermostat.increaseTempBy(6);
    }).toThrowError("max temp is " + thermostat.getMaximum());
  });

  it('will not allow a temperature higher than 32 if powersave is off', function(){
    thermostat.turnOffPowerSave();
    expect(function() {
      thermostat.increaseTempBy(15);
    }).toThrowError("max temp is " + thermostat.getMaximum());
  });

  it('will reset to default temperature', function(){
    thermostat.increaseTempBy(4);
    expect(thermostat.currentTemperature()).toEqual(24);
    thermostat.reset();
    expect(thermostat.currentTemperature()).toEqual(thermostat.getDefault());
  });

});