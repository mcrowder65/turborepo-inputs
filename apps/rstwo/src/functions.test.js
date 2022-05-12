import { hello, world } from "src/functions"

test("hello returns sdf", () => {
  expect(hello()).toEqual("sdf")
})

test("world returns hello", () => {
  expect(world()).toEqual("hello")
})
