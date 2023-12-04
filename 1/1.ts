const file = await Deno.readTextFile("./1/data.txt");

const total = file
  .trim()
  .split("\n")
  .reduce((acc, line) => {
    const numbers = line.split("").filter((char) => Number(char));
    return acc + Number(numbers[0] + numbers[numbers.length - 1]);
  }, 0);

console.log(total);
