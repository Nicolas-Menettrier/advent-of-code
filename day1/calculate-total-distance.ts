import { getInput } from "../utils/get-input";

function calculateTotalDistance() {
  let distance = 0;
  const inputs = getInput("./input");
  const sortedInput1 = inputs.input1.sort();
  const sortedInput2 = inputs.input2.sort();

  distance = sortedInput1.reduce((acc, input1, index) => {
    return acc + Math.abs(input1 - sortedInput2[index]);
  }, 0);

  console.log("Total distance: ", distance);
}

calculateTotalDistance();
