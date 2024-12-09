import * as fs from "fs";

type InputType = {
  input1: number[];
  input2: number[];
};

export function getInput(path: string): InputType {
  const input = fs.readFileSync(path, "utf8");
  const lines = input.split("\n");
  const result: InputType = {
    input1: [],
    input2: [],
  };

  for (const line of lines) {
    if (line.match(/^\d+\s+\d+$/)) {
      const [input1, input2] = line.split(/\s+/).map(Number);
      result.input1.push(input1);
      result.input2.push(input2);
    }
  }

  return result;
}
