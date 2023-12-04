const file = await Deno.readTextFile("./1/data.txt");

const lines = file.trim().split("\n");

let total = 0;

lines.forEach((line) => {
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

  const numbers = modifiedLine
    .split("")
    .filter((char) => !isNaN(parseInt(char)));

  total += parseInt(numbers[0] + numbers[numbers.length - 1]);
});

console.log(total);
