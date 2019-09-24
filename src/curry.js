// Curry returns a copy of the invoking function, with its first n 
// arguments pre-assigned with the arguments passed by the curry 
// invocation.
Function.prototype.curry = function(...curryArgs) {
  // nothing to curry with
  if (curryArgs.length < 1) {
      return this
  }
  let __method = this
  return function(...args) {
      return __method.apply(this, curryArgs.concat(args))
  }
}
