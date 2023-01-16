//BookStore has been moved to data.js 
console.log(bookStore);

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

function renderHeader(bookStore) {
  document.querySelector('#bookstore-name').textContent = bookStore.name;
}

renderHeader(bookStore);

function renderFooter(bookStore) {
  document.querySelector('#store').textContent = bookStore.location;
  document.querySelector('#number').textContent = bookStore.number;
  document.querySelector('#address').textContent = bookStore.address;
}

renderFooter(bookStore);
// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html struture for rendering 
// that book and insert it into our webpage!

function renderBook(book){
  const li = document.createElement("li");
  li.className = "list-li";

  const h3 = document.createElement("h3");
  h3.textContent = book.title;
  li.append(h3);

  const pAuthor = document.createElement("p");
  pAuthor.textContent = book.author;
  li.append(pAuthor);

  const pPrice = document.createElement("p");
  pPrice.textContent = formatPrice(book.price);
  li.append(pPrice);

  const img = document.createElement("img");
  img.src = book.imageUrl;
  img.alt = `${book.title} cover`;
  img.title = `${book.title} cover`;
  li.append(img);
  const button = document.createElement("button");
  button.textContent = 'Delete';
  li.append(button);

  document.querySelector('#book-list').append(li);
}

bookStore.inventory.forEach(book => {
  renderBook(book);
})

  