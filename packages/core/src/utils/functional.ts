/** @hidden */
type AnyFunction = (...args: any[]) => any;
/** @hidden */
export function compose(...fns: any[]): AnyFunction {
  if (fns.length === 0) return (arg) => arg;
  if (fns.length === 1) return fns[0];
  return fns.reduce((a, b) => (...args: any[]) => a(b(...args)));
}
