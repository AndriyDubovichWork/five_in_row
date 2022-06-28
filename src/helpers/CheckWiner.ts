import GetValueOfSpecificCell from './GetValueOfSpecificCell';

const CheckWiner = (
  fieldData: any,
  CurrentPosition: { x: number; y: number }
): string => {
  let direction: 'rigth' | 'bottom' | 'rigth-bottom' | 'left-bottom' = 'rigth';

  const CurrentPositionValue = GetValueOfSpecificCell(
    fieldData,
    CurrentPosition
  );
  let winer = '';
  if (CurrentPositionValue) {
    winer = CurrentPositionValue;
  } else {
    if (CurrentPosition.x + 1 < fieldData[0].length) {
      return CheckWiner(fieldData, {
        x: CurrentPosition.x + 1,
        y: CurrentPosition.y,
      });
    } else {
      return CheckWiner(fieldData, { x: 0, y: CurrentPosition.y + 1 });
    }
  }

  return winer;
};

export default CheckWiner;
