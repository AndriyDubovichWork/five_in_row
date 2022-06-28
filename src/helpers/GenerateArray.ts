export const GenerateArray = (height: number, width: number) => {
  let ArrayRow = [];
  let Array: any = [];

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      ArrayRow.push({ cell: '', x: w, y: h });
    }
    Array.push(ArrayRow);
    ArrayRow = [];
  }
  return Array;
};
