import React from 'react';
import { atom } from 'recoil';
import style from './Field.module.scss';

const Field = () => {
  const FieldData = atom({
    key: 'FieldData',
    default: [],
  });

  return <div>Field</div>;
};

export default Field;
