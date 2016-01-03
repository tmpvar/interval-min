var test = require('tape');
var imin = require('./interval-min');

test('b < a', function(t) {
  t.deepEqual(
    imin([1, 2], [3, 4]),
    [1, 2],
    'a is smallest'
  );
  t.end();
});

test('b <= a', function(t) {
  t.deepEqual(
    imin([1, 2], [2, 4]),
    [1, 2],
    'a is smallest'
  );
  t.end();
});

test('a < b', function(t) {
  t.deepEqual(
    imin([3, 4], [1, 2]),
    [1, 2],
    'b is smallest'
  );
  t.end();
});

test('a <= b', function(t) {
  t.deepEqual(
    imin([2, 4], [1, 2]),
    [1, 2],
    'b is smallest'
  );
  t.end();
});

test('lower b in a', function(t) {
  t.deepEqual(
    imin([1, 3], [2, 4]),
    [1, 3]
  );
  t.end();
});

test('lower a in b', function(t) {
  t.deepEqual(
    imin([2, 4], [1, 3]),
    [1, 3]
  );
  t.end();
});

test('b contained in a', function(t) {
  t.deepEqual(
    imin([0, 4], [1, 3]),
    [0, 3]
  );
  t.end();
});

test('a contained in b', function(t) {
  t.deepEqual(
    imin([1, 3], [0, 4]),
    [0, 3]
  );
  t.end();
});

test('accepts out param', function(t) {
  var out = [0, 0];
  var r = imin([1, 3], [0, 4], out);

  t.equal(r, out);
  t.deepEqual(r, [0, 3]);
  t.end();
});

test('creates out if not provided', function(t) {
  var a = [4, 5];
  var r = imin(a, [0, 3]);

  t.notEqual(r, a);
  t.deepEqual(r, [0, 3]);
  t.end();
});
