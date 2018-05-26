describe("Bowling", function() {

  beforeEach(function() {
    game = new Bowling;
  });

  it('should knock over a number of pins', function() {
    game.roll(5);
    expect(game.pins).toEqual(5)
  });

  it('should throw an error if attempting to knock over too many pins', function() {
    expect(function() { game.roll(11) } ).toThrow("Error - you cannot knock over more pins than there are standing!")
  });




});
