import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './App/store'; //подключение хранилища
import { Provider } from 'react-redux'; //провайдеры редакса (чтобы приложение знало, кому из компонентов давать доступ в хранилище)

//Сам App оборачиваем здесь же в провидер, чтобы приложение имело доступ к стору
//(стор в качестве пропса передаем в провидер) store={store}
//это всё делается единоразово и обеспечивает отличную работу приложения
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
