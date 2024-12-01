/**
 * Splits a text file string into an array of strings and filters out empty strings
 * @param textFile The text file as a string
 * @returns an array of the non-empty lines present in the text file
 */
export function textFileToLines(textFile: string) {
  return textFile.split("\n").filter((line) => line !== "");
}
