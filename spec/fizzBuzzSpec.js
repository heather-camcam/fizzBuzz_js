describe("fizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  it("returns 'fizz' when passed an integer divisible by 3", function() {
    expect(fizzbuzz.play(3)).toEqual("fizz");
  });

  it("returns 'buzz' when passed an integer divisible by 5", function() {
    expect(fizzbuzz.play(5)).toEqual("buzz");
  });

  it("returns 'fizzbuzz' when passed an integer divisible by 3 and 5", function() {
    expect(fizzbuzz.play(15)).toEqual("fizzbuzz");
  });

  it("returns the number played if not divisble by 3 or 5", function() {
    expect(fizzbuzz.play(17)).toEqual(17);
  });

});
