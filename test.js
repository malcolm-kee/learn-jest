const { classNames } = require('./index');

test(`classNames is a function`, () => {
  expect(typeof classNames).toBe('function');
});

test(`classNames can generate classNames correctly`, () => {
  expect(classNames('a', 'b', 'c')).toBe('a b c');
  expect(classNames('a', false, 3, null, {}, 'c')).toBe('a 3 c');
});
