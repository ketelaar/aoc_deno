import { textFileToLines } from "../utils/string.ts";

export function partA(textFile: string) {
  const lines = textFileToLines(textFile);

  const [firstList, secondList] = linesToTwoLists(lines);

  firstList.sort();
  secondList.sort();

  const pairs = firstList.map((element, index) => [element, secondList[index]]);

  const differences = pairs.map((pair) => {
    return Math.abs(pair[0] - pair[1]);
  });

  return differences.reduce((previous, current) => {
    return previous + current;
  }, 0);
}

export function partB(textFile: string) {
  const lines = textFileToLines(textFile);

  const [firstList, secondList] = linesToTwoLists(lines);

  const secondDictionary = secondList.reduce((map, taskId) => {
    const item = map.get(taskId) ?? 0;
    return map.set(taskId, item + 1);
  }, new Map());

  const similarityScores = firstList.map((listItem) => {
    const occurrences = secondDictionary.get(listItem) ?? 0;
    return listItem * occurrences;
  });

  return similarityScores.reduce((total, current) => total + current);
}

export async function main() {
  const text = await Deno.readTextFile("./src/day1/input.txt");

  const answerA = partA(text);
  console.log(`Total distance between the lists for part A is ${answerA}`);

  const answerB = partB(text);
  console.log(`Similarity score between left and right lists is ${answerB}`);
}

if (import.meta.main) {
  await main();
}

function linesToTwoLists(lines: string[]): [number[], number[]] {
  return lines.reduce<[number[], number[]]>(
    ([firstList, secondList], currentLine) => {
      const listItems = currentLine.split(" ").filter((v) => v !== "");
      const firstNumber = Number.parseInt(listItems[0]);
      const secondNumber = Number.parseInt(listItems[1]);

      return [[...firstList, firstNumber], [...secondList, secondNumber]];
    },
    [[], []],
  );
}
