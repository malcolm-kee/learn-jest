exports.classNames = function classNames() {
  const result = [];

  for (var i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      result.push(arg);
    }
  }

  return result.join(' ');
};

exports.omit = function omit(originalObj, keysToOmit) {
  const result = {};

  Object.keys(originalObj).forEach((key) => {
    if (!keysToOmit.includes(key)) {
      result[key] = originalObj[key];
    }
  });

  return result;
};

exports.forEach = function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

exports.waitForMs = function waitForMs(ms, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (callback) {
        callback();
      }
      resolve();
    }, ms);
  });
};
