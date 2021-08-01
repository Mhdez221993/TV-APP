myTvFetch = async (query, newCards) => {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`
  const settings = {
    method: 'GET',
    Headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  try {
    const fetchResponse = await fetch(`${url}`, settings);
    const data = await fetchResponse.json();
    newCards.render(data, query)
  } catch (e) {
    return e
  }
}

module.exports = myTvFetch
