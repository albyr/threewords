describe('ThreeWords', function () {

  beforeEach(function () {
    threewords = new ThreeWords();
  });

  it('should return an array of 3 words', function () {
    expect(threewords.calculate(123456789)).toEqual(['AMANDA', 'ESCORT', 'CRATER']);
  });

});
