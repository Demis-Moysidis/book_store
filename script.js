function init(){
    renderAllBooksFromJSON();
}

function renderAllBooksFromJSON(){
    let refBooksSection = document.getElementById('books');

    for (let index = 0; index < books.length; index++) {
        refBooksSection.innerHTML += renderOneBook(index);
    }
}