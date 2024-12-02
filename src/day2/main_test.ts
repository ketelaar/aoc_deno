import { assertEquals } from "@std/assert/equals";
import { part1, part2 } from "./main.ts";

const testFile = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
const actualFile = await Deno.readTextFile("./src/day2/input.txt");

Deno.test(function part1ExampleTest() {
  assertEquals(part1(testFile), 2);
});

Deno.test(function part1RealTest() {
  assertEquals(part1(actualFile), 559);
});

Deno.test(function part2ExampleTest() {
  assertEquals(part2(testFile), 4);
});

Deno.test(function part2RealTest() {
  assertEquals(part2(actualFile), 601);
});
