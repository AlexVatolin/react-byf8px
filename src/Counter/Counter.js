import React, { useState } from 'react';
//useSelector - для обращения к данным внутри хранилища
//useDispatch - посыл команды на выполнение редусера, которые находятся в counterSlice.js - т.е. нельзя просто так достучаться до данных, можем только использовать заранее подготовленный геттер или использовать useDispatch
import { useSelector, useDispatch } from 'react-redux';
//импорт методов
import { increment, selectCount, selectText } from './counterSlice';

export default function Counter() {
  const count = useSelector(selectCount); //получаем данные из store - эти геттеры (если ооп подход, а в функциональном подходе. который сейчас юзаем - это хуки) прописаны в counterSlice.js
  const text = useSelector(selectText); //получаем данные из store - эти геттер/хук прописаны в counterSlice.js
  const dispatch = useDispatch(); //сокращение метода диспэтч для удобства использования

  //по кнопке запускаем этот метод для доступа к хранилищу через dispatch (выше его сократили) и пусть этот метод запустит метод increment. Т.е. данные тут уходят в редакс, а потом мы их заново получаем  через геттеры count и text
  const buttonHandler = () => {
    dispatch(increment());
  };

  return (
    <div>
      <button onClick={buttonHandler}>+</button>
      <h2>{count}</h2>
      <h2>{text}</h2>
    </div>
  );
}
