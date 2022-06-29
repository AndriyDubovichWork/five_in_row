import GetValueOfSpecificCell from './GetValueOfSpecificCell';
import { CheckDirection } from './CheckDirection';
import { ChangePosition } from './ChangePosition';

const CheckWiner = (
  fieldData: any,
  CurrentPosition: { x: number; y: number }
): string => {
  const CurrentPositionValue = GetValueOfSpecificCell(
    fieldData,
    CurrentPosition
  );
  let winer = '';
  if (CurrentPositionValue) {
    if (
      CheckDirection(fieldData, CurrentPosition, CurrentPositionValue, 'rigth')
    ) {
      winer = CurrentPositionValue;
    }
    // else {
    //   ChangePosition(CurrentPosition, fieldData);
    // }
  } else {
    ChangePosition(CurrentPosition, fieldData);
  }

  return winer;
};

export default CheckWiner;
