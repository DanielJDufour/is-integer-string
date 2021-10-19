const isIntegerString = (str, options) => {

  const debug = typeof options === "object" && options.debug || false;
  if (debug) console.log("[is-integer-string] str:", str);
  if (debug) console.log("[is-integer-string] debug:", debug);

  if (typeof str !== "string") {
    if (debug) console.log("[is-integer-string] input is not a string");
    return false;
  }

  // remove any extra accidental whitespace
  str = str.trim();

  if (str.length === 0) return false;
  if (!str.match(/^[-+\d._,e]/)) {
    const bad_chars = Array.from(str).filter(char => !char.match(/^[-+\d._,e]$/));
    if (debug) console.log("[is-integer-string] input contains invalid character(s):", bad_chars);
    return false;
  }
  if (str.endsWith(".")) {
    if (debug) console.log("[is-integer-string] input ends with a period");
    return false;
  }
  if (str.endsWith("_")) {
    if (debug) console.log("[is-integer-string] input ends with an underscore");
    return false;
  }

  const parts = str.split(".");
  if (debug) console.log("[is-integer-string] parts:", parts);
  if (parts.length > 2) return false;

  const left = parts[0];
  if (debug) console.log("[is-integer-string] left:", left);
  const right = parts[1];
  if (debug) console.log("[is-integer-string] right:", right);

  if (right && !right.match(/^[0_]*$/)) {
    const bad_chars = Array.from(right).filter(char => !char.match(/^[0_]$/));
    if (debug) console.log("[is-integer-string] the right side of the decimal contains invalid character(s):", bad_chars);    
    return false;
  }
  if (right && str.match(/(.[0-9]*[1-9]+[0-9]*)$/)) return false;

  if (left && !left.match(/^[-+\d_,e]*$/)) {
    const bad_chars = Array.from(left).filter(char => !char.match(/^[-+\d_,e]$/));
    if (debug) console.log("[is-integer-string] the left side of the decimal contains invalid character(s):", bad_chars);    
    return false;    
  }

  if (left.includes(",") && left.includes("_")) {
    if (debug) console.log("[is-integer-string] the left side includes both a comma and an underscore");
    return false;
  }
  if (left.includes(",") && !left.match(/^[-+]?\d*(,000)*/)) return false;
  if (left.includes("_") && !left.match(/^[-+]?\d*(_000)*/)) return false;

  return true;
};

if (typeof module === "object") module.exports = isIntegerString;
if (typeof window === "object") window.isIntegerString = isIntegerString;
if (typeof self === "object") self.isIntegerString = isIntegerString;
