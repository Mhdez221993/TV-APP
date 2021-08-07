getPromise = async (url, newCards) => {
  const settings = {
    method: 'GET',
    Headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  try {
    const fetchResponse = await fetch(url, settings);
    const data = await fetchResponse.json();
    newCards.render(data, query)
  } catch (e) {
    return e
  }
}

module.exports = getPromise
