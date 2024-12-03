import { assertEquals } from "@std/assert/equals";
import { part1, part2 } from "./main.ts";

const testFile =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
const actualFile = await Deno.readTextFile("./src/day3/input.txt");

Deno.test(function part1ExampleTest() {
  assertEquals(part1(testFile), -1);
});

Deno.test(function part1RealTest() {
  assertEquals(part1(actualFile), -1);
});

Deno.test(function part2ExampleTest() {
  assertEquals(part2(testFile), -1);
});

Deno.test(function part2RealTest() {
  assertEquals(part2(actualFile), -1);
});
