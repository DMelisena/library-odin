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

// TODO:
// 1. Change all the description to a object
// 2. make an array consisting of book names
// 3. Make a function that generates 
// the ideal would be that this will declare 
function Book(name,author,pages,read){
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info= function(){
    if (this.read==true){
      var isread = "finished."
    }
    else{
      var isread = "not yet read."
    }
    console.log(this.name + " by "+this.author+ " consist of "+this.pages+" is "+isread)
  };
  this.add = function(){
  };
}

const ulysses = new Book("Ulysses","James Joyce",732,false)
ulysses.info()
