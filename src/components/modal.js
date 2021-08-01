class Modal {
  constructor(selector='body'){
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
        <section id=""><section>
      </div>`)}
    </div>`;
  }
  
  render(data, query){
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', (e) => {

      const id = e.target.parentNode.children[4].innerHTML
      const modal = this.createMarkup(data, Number(id))

      document.getElementById(this.selector).innerHTML = modal;

      this.bindEvent();
    }))
  }

  bindEvent(){
    const close = document.getElementById('close-modal')
    close.addEventListener('click', this.close)
  }

  close(){
    document.getElementById('modal').remove()
    location.reload();
  }
}

module.exports = Modal;
