import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

//createSlice - функция toolkit, которая позволяет быстро скорфигурировать и запустить хранилище
//метод принимает в себя название хранилища (может быт любым)
//начальные данные initialState
//reducers функции, доступные для данного хранилища. Т.к. напрямуб мы не можем обратиться к хранилищуЮ то у нас для изменения данных есть редьюсеры - это функции: reducers(объект); increment(ключ-имя функции) и сама функция (его тело). //Функция работает со стейтами и внутри стейтов доступны initialState - данные. Если их не пропишем, то будет undefined
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    text: 'privet',
  },
  reducers: {
    increment: (state) => {
      state.value += 15;
    },
    showConsole: (state) => {
      state.text = 'hello';
    },
  },
});

//экспортирует отдельно созданные методы
export const { increment, showConsole } = counterSlice.actions;

//геттеры для получения данных из хранилища
//тут можно сделать передачу объектом всех нужных данных
export const selectCount = (state) => state.counter.value;
export const selectText = (state) => state.counter.text;

//и экспорт всего блока reducer - т.е. по ходу весь целиком
export default counterSlice.reducer;
