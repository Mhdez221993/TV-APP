class CommentReservation {
  constructor(selector='commnet-reservation'){
    this.selector = selector;
  }

  createMarkup(data, id){
    const newData = data.filter(movie => movie.show.id === id)
    return `
    <div id="modal"> ${newData.map((movie)  =>`
      <div class="pop-up">
        <i class="fas fa-times" id="close-modal"></i>
        <img class="img-pop-up" src="${movie.show.image.medium}">
        <div class="movie-description">
          <span class="movie-name">${movie.show.name}</span>
          <span>Score: ${movie.score}</span>
          <span>Language: ${movie.show.language}</span>
          <span>Premiered: ${movie.show.premiered}</span>
          <span>Type: ${movie.show.type}</span>
        </div>
      </div>`)}
    </div>`;
  }
  
  render(data, query){
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', (e) => {

      const commnetReservation = this.createMarkup(data, this.selector)

      document.getElementById(this.selector).innerHTML = commnetReservation;

    }))
  }
}

module.exports = CommentReservation;
