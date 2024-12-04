export function part1(textFile: string) {
  const characterMatrix = textFile
    .split("\n") // divide into rows
    .filter((line) => line !== "") // make sure empty lines are not present
    .map((line) => line.split("")); // divide into columns

  const maxHorIndex = characterMatrix[0].length;
  const maxVertIndex = characterMatrix.length;

  return characterMatrix.reduce((sum, line, verticalIndex) => {
    const matchesPerLine = line.map((char, horizontalIndex) => {
      if (char === "X") {
        const matches = [
          findHorizontal(line, horizontalIndex, maxHorIndex),
          findHorizontalReverse(line, horizontalIndex),
          findVertical(
            characterMatrix,
            horizontalIndex,
            verticalIndex,
            maxVertIndex,
          ),
          findVerticalReverse(characterMatrix, horizontalIndex, verticalIndex),
          findDiagonalUpper(
            characterMatrix,
            horizontalIndex,
            verticalIndex,
            maxHorIndex,
          ),
          findDiagonalLower(
            characterMatrix,
            horizontalIndex,
            verticalIndex,
            maxHorIndex,
            maxVertIndex,
          ),
          findNegativeDiagonalUpper(
            characterMatrix,
            horizontalIndex,
            verticalIndex,
          ),
          findNegativeDiagonalLower(
            characterMatrix,
            horizontalIndex,
            verticalIndex,
            maxVertIndex,
          ),
        ];
        return matches.reduce((sum, bool) => sum + (bool ? 1 : 0), 0);
      }
      return 0;
    });

    return sum + matchesPerLine.reduce((total, value) => total + value);
  }, 0);
}

export function part2(textFile: string) {
  return 0;
}

export async function main() {
  const text = await Deno.readTextFile("./src/day4/input.txt");

  const answerA = part1(text);
  console.log(`${answerA}`);

  const answerB = part2(text);
  console.log(
    `${answerB}`,
  );
}

if (import.meta.main) {
  await main();
}

function findHorizontal(line: string[], index: number, maxHorIndex: number) {
  if (index + 3 > maxHorIndex) {
    return false;
  }

  return line[index + 1] === "M" && line[index + 2] === "A" &&
    line[index + 3] === "S";
}

function findHorizontalReverse(line: string[], index: number) {
  if (index - 3 < 0) {
    return false;
  }

  return line[index - 1] === "M" && line[index - 2] === "A" &&
    line[index - 3] === "S";
}

function findVertical(
  matrix: string[][],
  horizontalIndex: number,
  verticalIndex: number,
  maxVertIndex: number,
) {
  if (verticalIndex + 3 >= maxVertIndex) {
    return false;
  }

  const column = (verticalIndex: number) =>
    matrix[verticalIndex][horizontalIndex];

  return column(verticalIndex + 1) === "M" &&
    column(verticalIndex + 2) === "A" && column(verticalIndex + 3) === "S";
}

function findVerticalReverse(
  matrix: string[][],
  horizontalIndex: number,
  verticalIndex: number,
) {
  if (verticalIndex - 3 < 0) return false;

  const column = (verticalIndex: number) =>
    matrix[verticalIndex][horizontalIndex];

  return column(verticalIndex - 1) === "M" &&
    column(verticalIndex - 2) === "A" && column(verticalIndex - 3) === "S";
}

function findDiagonalUpper(
  matrix: string[][],
  horizontalIndex: number,
  verticalIndex: number,
  maxHorIndex: number,
) {
  if (horizontalIndex + 3 >= maxHorIndex || verticalIndex - 3 < 0) {
    return false;
  }

  const diagonal = (position: number) =>
    matrix[verticalIndex - position][horizontalIndex + position];

  return diagonal(1) === "M" && diagonal(2) === "A" && diagonal(3) === "S";
}

function findDiagonalLower(
  matrix: string[][],
  horizontalIndex: number,
  verticalIndex: number,
  maxHorIndex: number,
  maxVertIndex: number,
) {
  if (horizontalIndex + 3 >= maxHorIndex || verticalIndex + 3 >= maxVertIndex) {
    return false;
  }

  const diagonal = (position: number) =>
    matrix[verticalIndex + position][horizontalIndex + position];

  return diagonal(1) === "M" && diagonal(2) === "A" && diagonal(3) === "S";
}

function findNegativeDiagonalUpper(
  matrix: string[][],
  horizontalIndex: number,
  verticalIndex: number,
) {
  if (horizontalIndex - 3 < 0 || verticalIndex - 3 < 0) {
    return false;
  }

  const diagonal = (position: number) =>
    matrix[verticalIndex - position][horizontalIndex - position];

  return diagonal(1) === "M" && diagonal(2) === "A" && diagonal(3) === "S";
}

function findNegativeDiagonalLower(
  matrix: string[][],
  horizontalIndex: number,
  verticalIndex: number,
  maxVertIndex: number,
) {
  if (horizontalIndex - 3 < 0 || verticalIndex + 3 > maxVertIndex) {
    return false;
  }

  const diagonal = (position: number) =>
    matrix[verticalIndex + position][horizontalIndex - position];

  return diagonal(1) === "M" && diagonal(2) === "A" && diagonal(3) === "S";
}
