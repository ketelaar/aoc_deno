import { assertEquals } from "@std/assert/equals";
import { part1, part2 } from "./main.ts";

const testFile = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;
const actualFile = await Deno.readTextFile("./src/day4/input.txt");

Deno.test(function part1ExampleTest() {
  assertEquals(part1(testFile), 18);
});

Deno.test(function part1RealTest() {
  assertEquals(part1(actualFile), 2517);
});

// Deno.test(function part2ExampleTest() {
//   assertEquals(part2(testFile), -1);
// });

// Deno.test(function part2RealTest() {
//   assertEquals(part2(actualFile), -1);
// });
