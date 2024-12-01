import { assertEquals } from "@std/assert/equals";
import { partA, partB } from "./main.ts";

const testFile = `3   4
4   3
2   5
1   3
3   9
3   3`;
const actualFile = await Deno.readTextFile("./src/day1/input.txt");

Deno.test(function partAExampleTest() {
  assertEquals(partA(testFile), 11);
});

Deno.test(function partARealTest() {
  assertEquals(partA(actualFile), 1151792);
});

Deno.test(function partBExampleTest() {
  assertEquals(partB(testFile), 31);
});

Deno.test(function partBRealTest() {
  assertEquals(partB(actualFile), 21790168);
});
