export default class SwapiData {
  static async getPeople() {
    const endpoint = 'https://swapi.dev/api/people/';
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log(data);
    return data;
  }
}
