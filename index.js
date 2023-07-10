import updateDom from './Modules/updateDom.js';
import BookShelf from './Modules/BookManager.js';
import ShowTime from './Modules/ShowTime.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const container = document.querySelector('#bookList');
const form = document.querySelector('#addForm');
const submit = form.querySelector('button');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const author = form.authorInput.value;
  const title = form.titleInput.value;
  const book = new BookShelf(container, title, author);
  book.updateStorage();
  book.renderBooks();
  form.authorInput.value = '';
  form.titleInput.value = '';
  event.submit();
});

const display = new BookShelf(container);
display.renderBooks();
updateDom();
ShowTime(DateTime);
