import { configureStore } from '@reduxjs/toolkit'; //тут сама конфигурация хранилища configureStore
import counterReducer from '../Counter/counterSlice'; //тут конфигурация первого редусера
import myTextReducer from '../DataDesc/mytextSlice'; //тут конфигурация второго редусера
//Такой вариант разбивки хранилищ - это один из подходов, а так их много

//ниже использует 2 редьюсера редусера - с такими вот названиями, хотя могут быть и другими названия
export default configureStore({
  reducer: {
    counter: counterReducer,
    mytext: myTextReducer,
  },
});
