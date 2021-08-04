class Card {
  constructor(selector='movies-wrapper', modal){
    this.selector = selector;
    this.modal = modal;
  }

  createMarkup(data, query){
    return `<div class="main-programs"> ${data.map((movie) => `
    <article class="programs">
    <img src="${movie.show.image.medium}">
    <div class="likes">
      <i class="far fa-heart" id="like"></i>
      <span>10 likes</span>
    </div>
    <button class="button">Comments</button>
    <button class="button">Reservation</button>
    <span id="query">${movie.show.id}</span>
    </article>`).join('\n')}
    </div>`;
  }
  
  render(data, query){
    const movies = this.createMarkup(data, query)
    document.getElementById(this.selector).innerHTML = movies;
  }
}

module.exports = Card;
