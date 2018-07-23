<template>
  <div class="clearFix">
    <input
      readonly='readonly'
      class="keyWord"
      @click="showHide"
      :value="val"
    />
    <input type="button" value="GO">
    <span></span>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    computed:mapState(["val"]),
    methods:{
      // showHide(){
      //   this.$store.commit('changeSH')
      // }
      ...mapMutations({
        showHide:'changeSH'
      })
    }

  }
</script>
