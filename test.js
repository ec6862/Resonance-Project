// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQCUFoO-UfdLdqstwKwfw7kFLDdKKmgU0SiVEjS5_J7NGB6a6pqlZY9F26SV4-M9TJLvHkwAIrnO_Gh5sG8VzfBQFs2ev44Kij69xKDSdUNP6eF1AmelLgdCgS-P9P2xgFnGGSE5zubqf7B44cdJTynme4aJ0l-R4uN4vUvDn7k4Z6ML2VwRpGnnhaW28Qu-wiAST-W-Hx-mpvoo-Nx47bmrPjavpHf3CTfG0-nQLIbROmQRU4NaC41s7oAtRvk';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);