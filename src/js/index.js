import {initRouter} from './modules/router.js';
import './modules/search.js';
import changeFieldset from './modules/changeFieldset.js';
import {controlField} from './modules/controlField.js';
import './modules/upload.js';
import {renderBook} from "./modules/renderBook.js";

const fieldsBtnSort = document.querySelector('.fields__btn_sort');
const fieldsListSort = document.querySelector('.fields__list_sort');
const fieldsBtnFilter = document.querySelector('.fields__btn_filter');
const fieldsListFilter = document.querySelector('.fields__list_filter');

const init = () => {
  window.location.hash = '#/'

  initRouter();

  controlField(fieldsBtnSort, fieldsListSort, fieldsListFilter);
  controlField(fieldsBtnFilter, fieldsListFilter, fieldsListSort);

  changeFieldset();
};
init();
