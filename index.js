const inputForm = document.getElementById('input');
const shelf = document.getElementById('shelf');

class Book{
  constructor (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info (){
    if (this.read==true){
      var isread = "finished."
    }
    else{
      var isread = "not yet read."
    }
    console.log(this.name + " by "+this.author+ " consist of "+this.pages+" is "+isread)
  };
  sayHi(){
    alert(this.name)
    alert(this.lastNameIs)
  }
  add(){
    const newBook = document.createElement('div');
    newBook.className = 'book'
    const newDetails = document.createElement('div');
    newDetails.className = 'details'

    // Create book details
    const newH1Title= document.createElement('h1');
    newH1Title.textContent = this.title
    const newH1Author= document.createElement('h1');
    newH1Author.textContent = this.author

    // insert details to details div
    newDetails.appendChild(newH1Title);
    newDetails.appendChild(newH1Author);

    newBook.appendChild(newDetails);

    const delButton = document.createElement('button');
    delButton.className = 'delete';
    const image = document.createElement('img');
    image.src = 'img/icons8-trash-48.png';

    delButton.onclick = function(){
      const parentDiv = this.parentNode; 
      parentDiv.remove()
    }

    delButton.appendChild(image);
    newBook.appendChild(delButton);
    shelf.appendChild(newBook);
  };
}

inputForm.addEventListener('submit',function(event){
  event.preventDefault(); // Prevent default form submission behavior
  const ulysses = new Book("Ulysses","James Joyce",732,false)
  ulysses.info()

    // Get form input values
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');

    const newBooksdf = new Book(`${titleInput.value}`,`${authorInput.value}`,`${pagesInput.value}`)
    newBooksdf.info()
    newBooksdf.add()
    // Clear form inputs
    titleInput.value = '';
    authorInput.value = '';
})

// TODO:
// 1. Change all the description to an object function V
// 2. Make a function that generates new div for new book V
// 3. make an array consisting of book names
// 4. log the inserted data to my personal server
// 5. load the data from my personal server

const ulysses = new Book("Ulysses","James Joyce",732,false)
const feynman = new Book("The Feynman Lecture on Physics","Richard Feynman",732,false)
const solitude = new Book("One Hundred Years of Solitude","Gabriel Garcia Marquez",732,false)
const warAnd = new Book("War and Peace","Tolstoy",732,false)
const divine = new Book("Divine Comedy","Dante",732,false)
const alaska = new Book("Looking for Alaska","John Green",732,false)

var arr = [ulysses,feynman,solitude,warAnd,divine,alaska]

for (let i=0; i<arr.length; i++){
  arr[i].add()
}

