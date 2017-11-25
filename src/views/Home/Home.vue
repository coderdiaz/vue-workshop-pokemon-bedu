<template>
  <div class="home-view">
    <h1>Pokedex</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <row v-for="specie in pokemon" :key="specie.id" :specie="specie"></row>
      </tbody>
    </table>
  </div>
</template>
<script>
import {getPokemon} from '@/services/pokemon'
import Row from '@/components/row'
export default {
  name: 'HomeView',
  data () {
    return {
      pokemon: []
    }
  },
  created () {
    getPokemon().then((response) => {
      this.pokemon = response.data
    }).catch(err => console.error(err))
  },
  components: {
    Row
  }
}
</script>
<style></style>
