const file = await Deno.readTextFile("./2/data.txt");

const getSets = (line: string) => {
  const sets = line.split(":")[1].split(";");
  return sets;
};

const getColors = (set: string) => {
  const colors = set.trim().split(",");
  return colors;
};

const getNumberAndColor = (color: string): [number, string] => {
  const [number, colorName] = color.trim().split(" ");
  return [Number(number), colorName];
};

const total = file
  .trim()
  .split("\n")
  .reduce((acc, line) => {
    const highestNumberPerColor: { [key: string]: number } = {
      red: 0,
      green: 0,
      blue: 0,
    };
    const sets = getSets(line);
    sets.forEach((set) => {
      const colors = getColors(set);
      colors.forEach((color) => {
        const [number, colorName] = getNumberAndColor(color);
        if (highestNumberPerColor[colorName] < number) {
          highestNumberPerColor[colorName] = number;
        }
      });
    });
    const multipled = Object.values(highestNumberPerColor).reduce(
      (a, b) => a * b
    );
    return acc + multipled;
  }, 0);

console.log(total);
