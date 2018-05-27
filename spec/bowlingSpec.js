describe("Bowling", function() {

  beforeEach(function() {
    game = new Bowling;
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

    });
});
