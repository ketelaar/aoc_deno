import { textFileToLines } from "../utils/string.ts";

export function part1(textFile: string) {
  const lines = textFileToLines(textFile);

  const safeReports = lines.map((report) => {
    const levels = report.split(" ");
    return reportIsSafe(levels);
  });

  return safeReports.reduce(countNumberOfSafeReports, 0);
}

export function part2(textFile: string) {
  const lines = textFileToLines(textFile);

  const safeReports = lines.map((report) => {
    const levels = report.split(" ");
    const dampenedLevels = dampenLevels(levels);

    return [levels, ...dampenedLevels].some(reportIsSafe);
  });

  return safeReports.reduce(countNumberOfSafeReports, 0);
}

export async function main() {
  const text = await Deno.readTextFile("./src/day2/input.txt");

  const answerA = part1(text);
  console.log(`Total number of safe reports is ${answerA}`);

  const answerB = part2(text);
  console.log(
    `Total number of safe reports using the "Problem Dampener" is ${answerB}`,
  );
}

if (import.meta.main) {
  await main();
}

/**
 * Makes all possible lists of levels with having one of them removed
 * @param levels string of levels separated by a space character
 * @returns all possibilities of the original levels array with one of the elements removed
 */
function dampenLevels(levels: string[]): string[][] {
  return levels.map((_level, index) => {
    const newLevel = [...levels];
    newLevel.splice(index, 1);
    return newLevel;
  });
}

function countNumberOfSafeReports(count: number, reportIsSafe: boolean) {
  return count + (reportIsSafe ? 1 : 0);
}

function reportIsSafe(levels: string[]) {
  let levelsAreIncreasing = false;
  let levelsAreDecreasing = false;

  for (let i = 1; i < levels.length; i++) {
    const previous = Number.parseInt(levels[i - 1]);
    const current = Number.parseInt(levels[i]);

    const delta = current - previous;

    // difference should be at least 1 and at most 3
    if (Math.abs(delta) < 1 || Math.abs(delta) > 3) {
      return false;
    }

    if (delta > 0) {
      levelsAreIncreasing = true;
    } else if (delta < 0) {
      levelsAreDecreasing = true;
    }
  }
  // levels should either be increasing or decreasing, not both
  return levelsAreIncreasing != levelsAreDecreasing;
}
