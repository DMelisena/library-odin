function Book(title,author){
  this.title = title;
  this.author = author;
  this.addTo = function(div){
    const bookDiv =document.createElement('div');
    const titleDiv=document.createElement('h3');
    const authorDiv=document.createElement('h3');

    titleDiv.textContent= this.title;
    authorDiv.textContent=`by : ${this.author}`;

    bookDiv.className='card';
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);

    div.appendChild(bookDiv);
  }
}

function Section(genre){
  this.genre=genre
  const bookSectionDiv = document.createElement('div');
  this.div = bookSectionDiv
  const sectionGenre = document.createElement('h2');

  let count = bookSectionDiv.children.length
  const sectionCount= document.createElement('h4');

  sectionGenre.textContent=this.genre;
  sectionCount.textContent=count;

  bookSectionDiv.className='section'
  bookSectionDiv.appendChild(sectionGenre)
  bookSectionDiv.appendChild(sectionCount)

  this.refreshCount = function(){
    let count = this.div.children.length-2
    console.log(this.div.children.length)
    sectionCount.textContent=count;
  }
}

const psychology = new Section("Psychology")
const ulysses = new Book("Ulysses","James Joyce")
const alaska = new Book("Looking for Alaska","John Green")
ulysses.addTo(psychology.div)
alaska.addTo(psychology.div)

const shelf = document.getElementById('shelf');
psychology.refreshCount()
shelf.appendChild(psychology.div)

const feynman = new Book("The Feynman Lecture on Physics","Richard Feynman")
const solitude = new Book("One Hundred Years of Solitude","Gabriel Garcia Marquez")
const warAnd = new Book("War and Peace","Tolstoy")

feynman.addTo(psychology.div)
solitude.addTo(psychology.div)
warAnd.addTo(psychology.div)
psychology.refreshCount()
