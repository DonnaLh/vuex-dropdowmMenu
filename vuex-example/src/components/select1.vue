<template>
  <section class="warp">
    <div class="searchIpt clearFix">
      <select-input1
      ></select-input1>
      <list1 v-show="isShow"
      >
      </list1>
    </div>
  </section>
</template>

<script>

  import selectInput1 from '@/components/selectInput1'
  import list1 from '@/components/list1'
  import {mapState} from 'vuex'

  export default {
    computed:{
      ...mapState({
        isShow:'isShow'
      })
    },
    components: {
      selectInput1,
      list1
    }
  }
</script>
