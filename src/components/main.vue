<template>
  <div>
    <page/>
  </div>
</template>

<script>
  import page from './core/page'

  export default {
    name: 'Main',
    props: {
      msg: String
    },
    components: {page}
  }
</script>

<style scoped>

</style>
