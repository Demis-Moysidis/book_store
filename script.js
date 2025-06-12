function init(){
    renderAllBooksFromJSON();
}

function renderAllBooksFromJSON(){
    let refBooksSection = document.getElementById('books');

    for (let index = 0; index < books.length; index++) {
        refBooksSection.innerHTML += renderOneBook(index);
    }
}

function renderAllCommentsForBook(indexBook){
    let htmlComments = '';
    for (let indexComment = 0; indexComment < books[indexBook].comments.length; indexComment++) {
        htmlComments += renderOneComment(indexBook, indexComment);
    }
    return htmlComments
}

function toggleLike(i){
    document.getElementById(`heart-regular-${i}`).classList.toggle('d_none');
    document.getElementById(`heart-solid-${i}`).classList.toggle('d_none');
}

