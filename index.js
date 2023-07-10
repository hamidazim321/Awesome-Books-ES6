import updateDom from "./Modules/updateDom.js";
import BookShelf from "./Modules/BookManager.js";

let container = document.querySelector('#bookList');
let form = document.querySelector('#addForm');
let submit = form.querySelector('button');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  let author = form.authorInput.value;
  let title = form.titleInput.value;
  let book = new BookShelf(container, title, author);
  book.updateStorage()
  book.renderBooks()
  form.authorInput.value = ""
  form.titleInput.value = ""
  event.submit;
});

let display = new BookShelf(container)
display.renderBooks()

updateDom()


