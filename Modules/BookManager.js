class BookShelf {
  constructor(container, title, author) {
    this.title = title;
    this.author = author;
    this.container = container;
    this.listItem = document.createElement('ul');
  }

  // eslint-disable-next-line class-methods-use-this
  Storage() {
    let books = [];
    try {
      const storedBooks = localStorage.getItem('books');
      if (storedBooks) {
        books = JSON.parse(storedBooks);
        if (!Array.isArray(books)) {
          books = [];
        }
      }
    } catch {
      books = [];
    }

    return books;
  }

  updateStorage() {
    const books = this.Storage();
    const newBook = { title: this.title, author: this.author };
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
  }

  renderBooks() {
    const books = this.Storage();
    this.container.innerHTML = '';
    this.listItem.innerHTML = '';
    const reversedBooks = books.slice().reverse();
    reversedBooks.forEach((book) => {
      const li = document.createElement('li');
      const p = document.createElement('p');
      const removeButton = document.createElement('button');

      p.textContent = `'${book.title}' by '${book.author}'`;
      removeButton.textContent = 'Remove';

      li.appendChild(p);
      li.appendChild(removeButton);

      this.listItem.appendChild(li);

      removeButton.addEventListener('click', () => {
        this.removeBook(book.title, book.author);
        this.renderBooks();
      });
    });
    this.container.appendChild(this.listItem);
    this.listItem.classList.add('book-list');
  }

  removeBook(title, author) {
    let books = this.Storage();
    books = books.filter((book) => !(book.title === title && book.author === author));
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default BookShelf;