$(document).ready(function() {
  let thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updatePowerSave() {
    $('#power-saving-status').text(thermostat.isPowerSave());
  };

  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.increaseTempBy();
    updateTemperature(); 
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTempBy();
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  updatePowerSave();

  $('#powersaving-on').click(function(){
    thermostat.turnOnPowerSave();
    updatePowerSave();
  });

  $('#powersaving-off').click(function(){
    thermostat.turnOffPowerSave();
    updatePowerSave();
  });

});