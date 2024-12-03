export function part1(textFile: string) {
  return 0;
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
