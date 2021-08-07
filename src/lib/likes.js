LIkes = async (query = 'likes', id) => {
  const appId = 'fyMufU9HnqgcAMPC2YoI';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/${query}/`
  const settings = {
    method: 'POST',
    body: JSON.stringify({
      "likes" : 0,
      "item_id": id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  try {
    const fetchResponse = await fetch(`${url}`, settings);
    const data = await fetchResponse.json();
    return data
  } catch (e) {
    return e
  }
}

class Likes {
  constructor(data) {
    this.data = data
    this.appId = 'fyMufU9HnqgcAMPC2YoI';
    this.query = 'likes'
  }

  postLikes = async (query = 'likes', id) => {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.appId}/${this.query}/`
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        "likes" : 0,
        "item_id": id
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(`${url}`, settings);
      const data = await fetchResponse.text();
    } catch (e) {
      return e
    }
  }

  checkLikes(data){
    console.log(data);
  }
}

module.exports = getLikes;
