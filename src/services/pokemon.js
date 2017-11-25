import axios from 'axios'
const API_URL = 'https://www.pokemon.com/us/api'

/**
 * Function to get pokemon
 * @return AxiosPromise
 */
export function getPokemon () {
  return axios.get(`${API_URL}/pokedex/kalos`)
}
