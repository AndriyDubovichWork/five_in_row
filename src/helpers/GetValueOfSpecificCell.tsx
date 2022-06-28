const GetValueOfSpecificCell = (
  fieldData: any,
  coordinats: { x: number; y: number }
) => {
  let res = null;
  fieldData.map((array: any, index: number) => {
    if (index === coordinats.y) {
      array.map((obj: any, idx: number) => {
        if (idx === coordinats.x) {
          res = obj.cell;
        }
      });
    }
  });
  return res;
};

export default GetValueOfSpecificCell;
