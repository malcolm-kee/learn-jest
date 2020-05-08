const { classNames } = require('./util');

test(`classNames should generate className when all are string`, () => {
  const result = classNames('a', 'b', 'c');
  expect(result).toBe('a b c');
});

test(`classNames should filter null or undefined`, () => {
  const result = classNames('a', 'b', undefined, null, 'c');
  expect(result).toBe('a b c');
});

function expect(received) {
  return {
    toBe: function (expected) {
      if (received !== expected) {
        throw new Error(`
        Expected: ${expected}
        Received: ${received}
        `);
      }
    },
  };
}

function test(testName, testCode) {
  try {
    testCode();
    console.log(`Passed: ${testName}`);
  } catch (e) {
    console.error(e);
    console.error(`Failed: ${testName}`);
  }
}
