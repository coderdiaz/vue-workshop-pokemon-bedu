<template>
  <tr>
    <td>{{specie.number}}</td>
    <td>{{specie.name}}</td>
    <td><img :src="specie.ThumbnailImage" width="35"></td>
  </tr>
</template>
<script>
export default {
  name: 'Row',
  props: {
    specie: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
<style></style>
