$(document).ready(function() {

  module("underscore.function.combinators");

  test("always", function() {
    equal(_.always(42)(10000), 42, 'should return a function that always returns the same value');
    equal(_.always(42)(1,2,3), 42, 'should return a function that always returns the same value');
    deepEqual(_.map([1,2,3], _.always(42)), [42,42,42], 'should return a function that always returns the same value');
  });

  test("pipeline", function() {
    var result = _.pipeline(42, function(n) { return -n; }, function(n) { return "" + n; });
    equal(result, "-42", 'should apply a series of functions to an initial value');
  });



});