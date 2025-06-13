function renderOneBook(i){
    return /*html*/`
            <div class="book">
                <h2>${books[i].name}</h2>
                <div class="book-dividing_line"></div>
                <div class="book-img_bg">
                    <img src="./assets/img/book.png" alt="">
                </div>
                
                <div class="book-dividing_line"></div>
                <div class="book-infos-container">
                    <div class="book-infos">
                        <p class="book-infos-price">${books[i].price.toFixed(2)} €</p>
                        <div class="book-infos-like_btn">
                            <p id="book-infos-like-count-${i}" class="book-infos-like_btn-count">${books[i].likes}</p>
                            ${checkIfLikedAndRenderLikeBtn(i)}
                        </div> 
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td><b>Autor</b></td>
                                    <td>:&nbsp;&nbsp;&nbsp;</td>
                                    <td>${books[i].author}</td>
                                </tr>
                                <tr>
                                    <td><b>Erscheinungsjahr</b></td>
                                    <td>:&nbsp;&nbsp;&nbsp;</td>
                                    <td>${books[i].publishedYear}</td>
                                </tr>
                                <tr>
                                    <td><b>Genre</b></td>
                                    <td>:&nbsp;&nbsp;&nbsp;</td>
                                    <td>${books[i].genre}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="book-dividing_line"></div>
                <div class="book-comments">
                    <p><b>Kommentare:</b></p>
                    <div class="book-comments-list">
                        <table class="book-comments-list-table">
                            <tbody id="book-comments-${i}">
                                ${renderAllCommentsForBook(i)}
                            </tbody>
                        </table>
                    </div>
                    <div class="book-comments-input">
                        <input id="book-comments-input-${i}" type="text" placeholder="Schreibe dein Kommentar...">    
                        <img onclick="sendCommentToBook(${i})" src="./assets/icons/paper-plane-regular.svg" alt="">
                    </div>
                </div>
            </div>
            `
}

function renderOneComment(indexBook, indexComment){
    return /*html*/`<tr>
                        <td>[${books[indexBook].comments[indexComment].name}]</td>
                        <td>:&nbsp;&nbsp;&nbsp;</td>
                        <td>${books[indexBook].comments[indexComment].comment}</td>
                    </tr>`
}

function checkIfLikedAndRenderLikeBtn(indexBook){
    if(books[indexBook].liked){     
        return /*html*/`
                <img onclick="toggleLike(${indexBook})" id="heart-regular-${indexBook}" class="d_none" src="./assets/icons/heart-regular.svg" alt="">
                <img onclick="toggleLike(${indexBook})" id="heart-solid-${indexBook}" src="./assets/icons/heart-solid.svg" alt="">
                `
    }else{
        return /*html*/`
                <img onclick="toggleLike(${indexBook})" id="heart-regular-${indexBook}" src="./assets/icons/heart-regular.svg" alt="">
                <img onclick="toggleLike(${indexBook})" id="heart-solid-${indexBook}" class="d_none" src="./assets/icons/heart-solid.svg" alt="">
                `
    }
}

