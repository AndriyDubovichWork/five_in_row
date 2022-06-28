import { atom } from 'recoil';

export const FieldDataAtom = atom({
  key: 'FieldDataAtom',
  default: [[{ cell: '', x: 0, y: 0 }]],
});
