import CheckWiner from './CheckWiner';

export const ChangePosition = (CurrentPosition: any, fieldData: any) => {
  if (CurrentPosition.x + 1 < fieldData[0].length) {
    return CheckWiner(fieldData, {
      x: CurrentPosition.x + 1,
      y: CurrentPosition.y,
    });
  } else {
    return CheckWiner(fieldData, { x: 0, y: CurrentPosition.y + 1 });
  }
};
