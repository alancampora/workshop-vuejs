const spotifyService = {
  baseUrl: 'https://api.spotify.com/v1'
}

spotifyService.search = function (query, type) {
  const url = `${this.baseUrl}/search?q=${query}&type=${type}`

  return fetch(url, { method: 'GET' })
    .then(res => {
      if (res.status !== 200) {
        throw res.statusText
      }
      return res.json()
    })
}

export default spotifyService
