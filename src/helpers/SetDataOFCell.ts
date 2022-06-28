const clone = require('rfdc')();

export const SetDataOFCell = (
  x: number,
  y: number,
  user: string,
  fieldData: any,
  setFieldData: any,
  CheckWiner: any
) => {
  const data = clone(fieldData);

  const res = data.map((arr: any, index: number) => {
    if (index === y) {
      return arr.map((obj: any, indx: number) => {
        if (x === indx) {
          obj.cell = user;

          return obj;
        } else {
          return obj;
        }
      });
    } else {
      return arr;
    }
  });
  console.log(CheckWiner(res, { x: 0, y: 0 }));

  setFieldData(res);
};
