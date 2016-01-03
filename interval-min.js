module.exports = imin;

var min = Math.min;

function imin(a, b, out) {
  out = out || [];

  out[0] = min(a[0], b[0]);
  out[1] = min(a[1], b[1]);
  return out;
}
