const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGMzYjI5YWY1NzNhZmY0OTE0MzQ5YTc3MzE0MGUyNyIsIm5iZiI6MTcyMTg2OTMyOS40NDQ5OTIsInN1YiI6IjY2YTFhMmI4ODkwNGM4ZDk1OTcwNzczNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hoo4TBntYqKx6GvBF6FJMI76VoUpkZ80qseKg39Y1G0'
  }
};

const getTopLated = async (url) => {
  try{
    const response = await fetch(url, options);
    const json = await response.json();

    return json;
  } catch (err) {
    console.error(err)
  }
}

export { getTopLated }