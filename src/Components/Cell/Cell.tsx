import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { FieldDataAtom } from '../../atmos';
import CheckWiner from '../../helpers/CheckWiner';
import { SetDataOFCell } from '../../helpers/SetDataOFCell';

const Cell = ({
  x,
  y,
  cell,
  users,
  userID,
  setUserID,
}: {
  x: number;
  y: number;
  cell: string;
  users: string[];
  userID: number;
  setUserID: any;
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [fieldData, setFieldData] = useRecoilState(FieldDataAtom);

  return (
    <button
      key={x.toString() + y.toString()}
      style={{ height: '60px', width: '60px' }}
      disabled={isDisabled}
      onClick={() => {
        SetDataOFCell(x, y, users[userID], fieldData, setFieldData, CheckWiner);
        setIsDisabled(true);
        if (userID + 1 === users.length) {
          setUserID(0);
        } else {
          setUserID(userID + 1);
        }
      }}
    >
      {cell}
    </button>
  );
};

export default Cell;
