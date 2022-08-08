export default class SwapiData {
  async getPeople() {
    const endpoint = 'https://swapi.dev/api/people/1/';
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log(data);
    return data;
  }
}
