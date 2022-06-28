import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { FieldDataAtom } from '../../atmos';
import { GenerateArray } from '../../helpers/GenerateArray';
import Cell from '../Cell/Cell';
import style from './Field.module.scss';

type FieldType = {
  height: number;
  width: number;
  users: string[];
  userID: number;
  setUserID: any;
};

const Field = ({ height, width, userID, users, setUserID }: FieldType) => {
  const [fieldData, setFieldData] = useRecoilState(FieldDataAtom);
  useEffect(() => {
    setFieldData(GenerateArray(height, width));
  }, []);

  return (
    <div>
      {fieldData.map((OuterArr, id) => {
        return (
          <div style={{ display: 'flex' }} key={id}>
            {OuterArr.map(({ x, y, cell }) => {
              return (
                <Cell
                  x={x}
                  y={y}
                  cell={cell}
                  users={users}
                  userID={userID}
                  setUserID={setUserID}
                  key={x.toString() + y.toString()}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Field;
