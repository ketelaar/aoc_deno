export function part1(textFile: string) {
  return extractMulStrings(textFile)
    .map(getMulResult)
    .reduce((sum, value) => sum + value);
}

export function part2(textFile: string) {
  // captures all text between a "don't()" and a "do()"
  const dontGroupRegex = new RegExp(
    "(?:don't\\(\\))(.|\\n)*?(?:do\\(\\))",
    "g",
  );

  // remove all text between a "don't ()" and a "do(), so that it only leaves the enabled mul()'s"
  const disabledMulRemoved = textFile.replaceAll(dontGroupRegex, "");

  return extractMulStrings(disabledMulRemoved)
    .map(getMulResult)
    .reduce((sum, value) => sum + value);
}

/**
 * For a given mul(x, y) string, computes the product of x and y
 * @param mulString string in the form mul(x, y) with x and y being integers
 * @returns product of x and y for mul(x, y)
 */
function getMulResult(mulString: string) {
  const [firstValue, secondValue] = mulString
    .replace("mul(", "") // remove leading mul(
    .replace(")", "") // remove trailing )
    .split(","); // split string into two parts, since we should have x,y now

  return Number.parseInt(firstValue) * Number.parseInt(secondValue);
}

/**
 * Extracts all mul(x, y) substrings from the given string
 * @param textFile String in which the mul instructions are located
 * @returns list of strings in the form mul(x,y) with x and y being integers
 */
function extractMulStrings(textFile: string) {
  //  all substrings with mul(x,y) with x and y being integers with at least 1 digit and at most 3
  const mulRegex = new RegExp("mul\\([0-9]{1,3},[0-9]{1,3}\\)", "g");

  return textFile.matchAll(mulRegex).map((execArray) => execArray[0]);
}

export async function main() {
  const text = await Deno.readTextFile("./src/day3/input.txt");

  const answerA = part1(text);
  console.log(`Total result of the multiplications is ${answerA}`);

  const answerB = part2(text);
  console.log(
    `Total result for enabled multiplications is ${answerB}`,
  );
}

if (import.meta.main) {
  await main();
}
