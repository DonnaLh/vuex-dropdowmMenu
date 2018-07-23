<template>
  <ul class="list">
    <li
      v-for="item in listData"
      @click="selectList(item.title)"
    >{{item.title}}</li>
  </ul>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'

  export default {
    computed:{
        ...mapState(['listData'])
    },
    methods:{
      ...mapMutations({
        selectList:'changeVal'
      })
    }
  }
</script>
