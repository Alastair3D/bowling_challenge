function Bowling() {
  this.current_frame = 1;
  this.pins = 10;
  this.current_roll = 1;
  this.frame_score = 0;
  this.scorecard = []
};

  Bowling.prototype.roll = function(num) {
    if(this.pins - num < 0 || num > 10) {
      throw("Error - you cannot knock over that many pins!")
    } else {
    this.pins -= num;
    this.frame_score += num;
    };

    if (this.current_roll == 2 || this.pins == 0) {
      this.end_frame();
    } else {
    this.current_roll = 2;
    };
  };

  Bowling.prototype.end_frame = function() {
    this.current_roll = 1;
    this.current_frame += 1
    this.scorecard.push(this.frame_score);
  };
