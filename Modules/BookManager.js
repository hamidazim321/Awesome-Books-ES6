class BookShelf {
  constructor(container, title, author) {
    this.title = title;
    this.author = author;
    this.container = container;
    this.listItem = document.createElement('ul');
  }

  Storage(){
    let books = [];
    try {
      const storedBooks = localStorage.getItem('books');
      if (storedBooks) {
        books = JSON.parse(storedBooks);
        if (!Array.isArray(books)) {
          books = [];
        }
      }
    } catch (error) {
      console.log('Error parsing JSON:', error);
    }

    return books;
  }

  updateStorage(){
    let books = this.Storage()
    let newBook = {title: this.title, author: this.author}
    books.push(newBook)
    localStorage.setItem('books', JSON.stringify(books))
    let local = JSON.parse(localStorage.getItem('books'))
    console.log(local)
  }

  renderBooks(){
    let books = this.Storage()
    this.container.innerHTML = ''
    this.listItem.innerHTML = ''
    let reversedBooks = books.slice().reverse()
    reversedBooks.forEach(book => {
      let li = document.createElement('li')
      let p = document.createElement('p')
      let removeButton = document.createElement('button')

      p.textContent = `'${book.title}' by '${book.author}'`
      removeButton.textContent = 'Remove'

      li.appendChild(p)
      li.appendChild(removeButton)

      this.listItem.appendChild(li)

      removeButton.addEventListener('click', () => {
        this.removeBook(books, book.title, book.author)
        this.renderBooks();
      });

    });
    this.container.appendChild(this.listItem)
    this.listItem.classList.add('book-list')
  }

  removeBook(books, title, author) {
    books = books.filter(book => !(book.title === title && book.author === author));
    localStorage.setItem('books', JSON.stringify(books));
    console.log(books);
  }
}

export default BookShelf