const myLibrary = [];

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

function addBookToLibrary(){
}
