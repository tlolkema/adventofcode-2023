const file = await Deno.readTextFile("./2/data.txt");

type Bag = {
  [key: string]: number;
};

const bag: Bag = {
  red: 12,
  green: 13,
  blue: 14,
};

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

const isInBag = (number: number, colorName: string) => {
  return bag[colorName] >= number;
};

const total = file
  .trim()
  .split("\n")
  .reduce((acc, line, index) => {
    const sets = getSets(line);
    const hasAllColorsInBag = sets.every((set) => {
      const colors = getColors(set);
      return colors.every((color) => {
        const [number, colorName] = getNumberAndColor(color);
        return isInBag(number, colorName);
      });
    });
    return hasAllColorsInBag ? acc + (index + 1) : acc;
  }, 0);

console.log(total);
