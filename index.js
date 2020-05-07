export function classNames() {
  const result = [];

  for (let i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    const argType = typeof arg;
    if (argType === 'string' || argType === 'number') {
      result.push(arg);
    }
  }

  return result;
}
