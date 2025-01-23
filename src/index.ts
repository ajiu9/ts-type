export type Expect<T extends true> = T
export type ExpectTrue<T extends true> = T
export type ExpectFalse<T extends false> = T
export type IsTrue<T extends true> = T
export type IsFalse<T extends false> = T

export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true

// https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
export type IsAny<T> = 0 extends 1 & T ? true : false
export type NotAny<T> = true extends IsAny<T> ? false : true

export type Pick<T, K extends keyof T> = {
  [key in K]: T[key]
}

export type Readonly<T> = { readonly [P in keyof T]: T[P] }

export type TupleToObject<T extends readonly (keyof any)[]> = {
  [Key in T[number]]: Key
}

export type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ? F extends U ? true : Includes<R, U> : false

export type Push<T extends any[], U> = [...T, U]
export type Unshift<T extends any[], U> = [U, ...T]

/**
 * Void function
 */
export type Fn = () => void
/**
 * Any function
 */
export type AnyFn = (...args: any[]) => any
