function div(a, b) {
  return a / b;
}

function containsNumbers(text) {
  for (let i = 0; i < text.length; i++) {
    const c = text.charAt(i);
    if (c >= "0" && c <= "9") {
      return true;
    }
  }
  return false;
}
exports.div = div;
exports.containsNumbers = containsNumbers;
