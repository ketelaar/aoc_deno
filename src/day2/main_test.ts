import { assertEquals } from "@std/assert/equals";
import { partA, partB } from "./main.ts";

const testFile = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
const actualFile = await Deno.readTextFile("./src/day2/input.txt");

Deno.test(function partAExampleTest() {
  assertEquals(partA(testFile), 2);
});

Deno.test(function partARealTest() {
  assertEquals(partA(actualFile), 559);
});

Deno.test(function partBExampleTest() {
  assertEquals(partB(testFile), 4);
});

Deno.test(function partARealTest() {
  assertEquals(partB(actualFile), 601);
});
