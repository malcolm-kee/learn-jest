const { classNames, omit, forEach, waitForMs } = require('./util');

describe(`classNames`, () => {
  test(`classNames is a function`, () => {
    expect(typeof classNames).toBe('function');
  });

  test(`classNames can generate classNames correctly`, () => {
    expect(classNames('a', 'b', 'c')).toBe('a b c');
    expect(classNames('a', false, 3, null, {}, 'c')).toBe('a 3 c');
  });
});

test(`omit`, () => {
  expect(
    omit(
      {
        a: 'A',
        b: 'B',
      },
      ['b']
    )
  ).toStrictEqual({
    a: 'A',
  });
});

test(`forEach`, () => {
  const items = [1, 2, 3, 4, 5];

  const callbackFn = jest.fn();

  forEach(items, callbackFn);

  expect(callbackFn).toHaveBeenCalledTimes(5);
});

describe(`waitForMs`, () => {
  test(`waitForMs without callback`, async () => {
    const result = await waitForMs(10);
    expect(result).toBeUndefined();
  });

  test(`waitForMs with callback`, async () => {
    const callBackFn = jest.fn();
    await waitForMs(10, callBackFn);

    expect(callBackFn).toHaveBeenCalledTimes(1);
  });
});
