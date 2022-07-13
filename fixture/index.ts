// eslint-disable-next-line no-console
console.log('aaa')

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
let a: number = 1
if (a === 1) a = 2
if (a === 2) {
  a = 3
}

// @ts-expect-error requires a comment
export const b: string = 1

export interface Foo {
  a: string
}
