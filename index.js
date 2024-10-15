function Book(name,author){
  this.name = name;
  this.author = author;
}

const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const parentDiv = this.parentNode; 
    parentDiv.remove()
  });
});

const inputForm = document.getElementById('input');
const shelf = document.getElementById('shelf');
// Get form input values
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

inputForm.addEventListener('submit',function(event){
  event.preventDefault(); // Prevent default form submission behavior
  
  const newBook = document.createElement('div');
  newBook.className = 'book'
  const newDetails = document.createElement('div');
  newDetails.className = 'details'

  // Create book details
  const newH1Title= document.createElement('h1');
  newH1Title.textContent = `${titleInput.value}`;
  const newH1Author= document.createElement('h1');
  newH1Author.textContent = `${authorInput.value}`;

  // insert details to details div
  newDetails.appendChild(newH1Title);
  newDetails.appendChild(newH1Author);

  // Clear form inputs
  titleInput.value = '';
  authorInput.value = '';

  newBook.appendChild(newDetails);

  const button = document.createElement('button');
  button.className = 'delete';
  const image = document.createElement('img');
  image.src = 'img/icons8-trash-48.png';

  button.appendChild(image);
  newBook.appendChild(button);
  shelf.appendChild(newBook);
})

