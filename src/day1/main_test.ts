import { assertEquals } from "@std/assert/equals";
import { part1, part2 } from "./main.ts";

const testFile = `3   4
4   3
2   5
1   3
3   9
3   3`;
const actualFile = await Deno.readTextFile("./src/day1/input.txt");

Deno.test(function part1ExampleTest() {
  assertEquals(part1(testFile), 11);
});

Deno.test(function part1RealTest() {
  assertEquals(part1(actualFile), 1151792);
});

Deno.test(function part2ExampleTest() {
  assertEquals(part2(testFile), 31);
});

Deno.test(function part2RealTest() {
  assertEquals(part2(actualFile), 21790168);
});
