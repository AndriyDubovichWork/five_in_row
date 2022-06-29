import GetValueOfSpecificCell from './GetValueOfSpecificCell';

export const CheckDirection = (
  fieldData: any,
  CurrentPosition: any,
  CurrentPositionValue: any,
  direction: string
) => {
  let res = false;
  let resArr = [];
  switch (direction) {
    case 'rigth':
      for (let i = 1; i < 5; i++) {
        if (
          GetValueOfSpecificCell(fieldData, {
            x: CurrentPosition.x + i,
            y: CurrentPosition.y,
          }) === CurrentPositionValue
        ) {
          resArr.push(
            GetValueOfSpecificCell(fieldData, {
              x: CurrentPosition.x + i,
              y: CurrentPosition.y,
            })
          );
        }
      }

      break;
    case 'bottom':
      for (let i = 1; i < 5; i++) {
        if (
          GetValueOfSpecificCell(fieldData, {
            x: CurrentPosition.x,
            y: CurrentPosition.y + i,
          }) === CurrentPositionValue
        ) {
          resArr.push(
            GetValueOfSpecificCell(fieldData, {
              x: CurrentPosition.x,
              y: CurrentPosition.y + i,
            })
          );
        }
      }

      break;
    case 'rigth-bottom':
      for (let i = 1; i < 5; i++) {
        if (
          GetValueOfSpecificCell(fieldData, {
            x: CurrentPosition.x + i,
            y: CurrentPosition.y + i,
          }) === CurrentPositionValue
        ) {
          resArr.push(
            GetValueOfSpecificCell(fieldData, {
              x: CurrentPosition.x + i,
              y: CurrentPosition.y + i,
            })
          );
        }
      }

      break;
    case 'left-bottom':
      for (let i = 1; i < 5; i++) {
        if (
          GetValueOfSpecificCell(fieldData, {
            x: CurrentPosition.x - i,
            y: CurrentPosition.y + i,
          }) === CurrentPositionValue
        ) {
          resArr.push(
            GetValueOfSpecificCell(fieldData, {
              x: CurrentPosition.x - i,
              y: CurrentPosition.y + i,
            })
          );
        }
      }

      break;
  }
  if (resArr.length === 4) {
    res = true;
  }
  return res;
};
