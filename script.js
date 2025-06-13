function init(){
    let booksFromLocalStorage = localStorage.getItem('books');
    if(booksFromLocalStorage){
        books = JSON.parse(booksFromLocalStorage);
    }
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

function toggleLike(indexBook){
    if(books[indexBook].liked){
        setNewLikeCountForBook(indexBook, 'minus');
        books[indexBook].liked = false;
        saveUpdatedBooksInLocalStorage();
    }else{
        setNewLikeCountForBook(indexBook, 'plus');
        books[indexBook].liked = true;
        saveUpdatedBooksInLocalStorage();
    }

    document.getElementById(`heart-regular-${indexBook}`).classList.toggle('d_none');
    document.getElementById(`heart-solid-${indexBook}`).classList.toggle('d_none');
}

function sendCommentToBook(i){
    let refCommentInput = document.getElementById(`book-comments-input-${i}`);
    let inputValue = refCommentInput.value;

    if(inputValue){
        books[i].comments.unshift({"name": "Demis", "comment": inputValue});
        refCommentInput.value = '';
        saveUpdatedBooksInLocalStorage();

        let refBookComments = document.getElementById(`book-comments-${i}`);
        refBookComments.innerHTML = renderAllCommentsForBook(i);
    }
}

function setNewLikeCountForBook(indexBook, operator){
    let refBookLike = document.getElementById(`book-infos-like-count-${indexBook}`);
    let valueBookLike = refBookLike.textContent;

    if(operator == 'plus'){
        refBookLike.innerHTML = +valueBookLike + 1;
        books[indexBook].likes += 1;
        saveUpdatedBooksInLocalStorage();
    }else{
        refBookLike.innerHTML = +valueBookLike - 1;
        books[indexBook].likes -= 1;
        saveUpdatedBooksInLocalStorage();
    }
}

function saveUpdatedBooksInLocalStorage(){
    localStorage.setItem('books', JSON.stringify(books));
}