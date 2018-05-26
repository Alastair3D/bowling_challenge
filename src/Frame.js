var Frame = function() {
  this.points = 0;
};




// var Thermostat = function() {
//   const MIN_TEMP = 10;
//   const MAX_TEMP = 32;
//   const MAX_PS_TEMP = 25;
//   this.minTemp = MIN_TEMP;
//   this.maxTemp = MAX_TEMP;
//   this.maxPSTemp = MAX_PS_TEMP;
//   this.temperature = 20;
//   this.powerSavingIsOn = true;
// };
//
// Thermostat.prototype.turnPowerSavingOff = function() {
//   this.powerSavingIsOn = false;
// };
//
// Thermostat.prototype.turnPowerSavingOn = function() {
//   this.powerSavingIsOn = true;
//   if (this.temperature > this.maxPSTemp) {
//     this.temperature = this.maxPSTemp;
//   }
// };
//
// Thermostat.prototype.up = function() {
//   if (
//     (!this.powerSavingIsOn && this.temperature < this.maxTemp) ||
//     (this.powerSavingIsOn && this.temperature < this.maxPSTemp)
//   ) {
//     this.temperature += 1;
//   }
// };
