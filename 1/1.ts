const file = await Deno.readTextFile("./1/data.txt");

const lines = file.trim().split("\n");

let total = 0;

lines.forEach((line) => {
  const numbers = line.split("").filter((char) => !isNaN(parseInt(char)));
  total += parseInt(numbers[0] + numbers[numbers.length - 1]);
});

console.log(total);
