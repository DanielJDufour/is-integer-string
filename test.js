const { strictEqual } = require("assert");
const isIntegerString = require("./is-integer-string");

const checkTrue = (str) => {
  if (!isIntegerString(str)) {
    strictEqual(isIntegerString(str, { debug: true }), true);
  }
};

const checkFalse = (str) => {
  if (isIntegerString(str)) {
    strictEqual(isIntegerString(str, { debug: true }), false);
  }
};

checkTrue("1");
checkTrue("1_000");
checkTrue("1,000");
checkTrue("7,000.00");
checkTrue("0.00000");
checkTrue("-0.00000");
checkTrue("+10");
checkTrue("1_234.00");
checkTrue(" 10");
checkTrue("1234e5");
checkTrue("1234E5");

checkFalse(null);
checkFalse(undefined);
checkFalse(8);
checkFalse("1,123.02");
checkFalse("129123xasdfa");
checkFalse("-0.00400");
checkFalse("-0.400");
checkFalse("-0.");
checkFalse("-0.3");
