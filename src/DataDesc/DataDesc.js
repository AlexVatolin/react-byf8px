import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, selectText } from '../Counter/counterSlice'; //используем уже написанные ранее методы в другой папке
import { increment, selectMytext } from './mytextSlice'; //а это получаем из этой папки

export default function DataDesc() {
  const count = useSelector(selectCount); //получает данные из store
  const text = useSelector(selectText); //получает данные из store
  const t = useSelector(selectMytext); //получает данные из store
  const dispatch = useDispatch();

  let changeText = () => {
    console.log('work');
    console.log(t);
    dispatch(increment());
  };

  return (
    <div>
      <hr />
      <h1>DataDesc</h1>
      <h2>{count}</h2>
      <h2>{text}</h2>
      <h2 onClick={changeText}>{t}</h2>
    </div>
  );
}
