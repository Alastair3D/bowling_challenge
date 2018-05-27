describe("Bowling", function() {

  beforeEach(function() {
    game = new Bowling;
  });

  describe("#scorecard", function() {

    it('should start as an empty array', function() {
      expect(game.scorecard).toEqual([])
    });
  });

  describe("#roll", function() {

    it('should knock over a number of pins', function() {
      game.roll(5);
      expect(game.pins).toEqual(5);
    });

    it('should throw error if attempting to knock over too many pins on first roll or a frame', function() {
      expect(function() { game.roll(11) } ).toThrow("Error - you cannot knock over that many pins!");
    });

    it('should throw error if attempting to knock over too many pins on second roll of a frame', function() {
      game.roll(7);
      expect(function() { game.roll(4) } ).toThrow("Error - you cannot knock over that many pins!");
    });

    it('should set #current_roll to 1 when starting a new frame', function() {
      expect(game.current_roll).toEqual(1);
    });

    it('should change #current_roll to 2', function() {
      game.roll(9);
      expect(game.current_roll).toEqual(2);
    });

    it('should update #frame_score', function() {
      game.roll(8);
      expect(game.frame_score).toEqual(8);
    });
  });

  describe("#end_frame", function() {

    it('should reset #current_roll to 1', function() {
      game.roll(10);
      game.end_frame();
      expect(game.current_roll).toEqual(1);
    });

    it('should update #scorecard', function() {
      game.roll(6);
      game.roll(3);
      game.end_frame();
      expect(game.scorecard).toEqual([9]);
    });

    it('should start a new frame after a strike', function() {
      game.roll(10);
      expect(game.current_frame).toEqual(2);
    });

  });


});
