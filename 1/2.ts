const file = await Deno.readTextFile("./1/data.txt");

const total = file
  .trim()
  .split("\n")
  .reduce((acc, line) => {
    const modifiedLine = line
      .replaceAll("one", "one1one")
      .replaceAll("two", "two2two")
      .replaceAll("three", "three3three")
      .replaceAll("four", "four4four")
      .replaceAll("five", "five5five")
      .replaceAll("six", "six6six")
      .replaceAll("seven", "seven7seven")
      .replaceAll("eight", "eight8eight")
      .replaceAll("nine", "nine9nine");

    const numbers = modifiedLine.split("").filter((char) => Number(char));
    return acc + Number(numbers[0] + numbers[numbers.length - 1]);
  }, 0);

console.log(total);
