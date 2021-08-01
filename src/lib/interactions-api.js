myInteractionFetch = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/`
  const settings = {
    method: 'POST',
    Headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  try {
    const fetchResponse = await fetch(`${url}`, settings);
    const data = await fetchResponse.json();
    console.log(data);
  } catch (e) {
    return e
  }
}

module.exports = myInteractionFetch;