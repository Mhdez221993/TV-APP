myInteractionFetch = async (query, classEvent) => {
  const appId = 'fZLRwamAP1btzA94aCVw';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/${query}/`
  const settings = {
    method: 'GET',
    // body: JSON.stringify({
    //   "likes" : 5,
    //   "item_id": "movies theatre"
    // }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  try {
    const fetchResponse = await fetch(`${url}`, settings);
    const id = await fetchResponse.text();
    console.log(id);
  } catch (e) {
    return e
  }
}
