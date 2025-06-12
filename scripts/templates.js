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
                            <p class="book-infos-like_btn-count">${books[i].likes}</p>
                            <img src="./assets/icons/heart-regular.svg" alt="">
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
                            <tbody>
                                <tr>
                                    <td>[Kevin]</td>
                                    <td>:&nbsp;&nbsp;&nbsp;</td>
                                    <td>Eine Nachricht zum test dieser Funktion.</td>
                                </tr>
                                <tr>
                                    <td>[DemisMoysidis]</td>
                                    <td>:&nbsp;&nbsp;&nbsp;</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat perferendis, laboriosam neque dignissimos dolor accusantium quae officia id sed atque in magni earum! Voluptate saepe id unde. Saepe, id?</td>
                                </tr>
                                <tr>
                                    <td>[Demis]</td>
                                    <td>:&nbsp;&nbsp;&nbsp;</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repellat perferendis, laboriosam neque dignissimos dolor accusantium quae officia id sed atque in magni earum! Voluptate saepe id unde. Saepe, id?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="book-comments-input">
                        <input type="text" placeholder="Schreibe dein Kommentar...">    
                        <img src="./assets/icons/paper-plane-regular.svg" alt="">
                    </div>
                </div>
            </div>
            `
}


