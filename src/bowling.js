function Bowling() {
  this.pins = 10;
  this.current_roll = 1;
};

Bowling.prototype.roll = function(num) {
  if(this.pins - num < 0 || num > 10) {
    throw("Error - you cannot knock over that many pins!")
  } else {
  this.pins -= num
  this.current_roll = 2;
  };
};




// +    it('Should change the current roll to 2', function() {
// +      bowlingGame.roll(5);
// +      expect(bowlingGame.current_roll).toEqual(2)
// +    });
// });
// });
//
//
// function Bowling() {
//   this.pins = 10
// +  this.current_roll = 1
// }
//
// Bowling.prototype.roll = function(num) {
//   if(this.pins - num < 0 || num > 10) {
//     throw("You cannot knock over more pins than there are standing")
//   } else {
//   this.pins -= num;
// +  this.current_roll = 2
//   };
// };
