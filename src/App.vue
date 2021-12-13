<template>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})

</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 800px;
  margin: 0 auto;

  .editor {
    border: 1px solid #000;
    min-height: 100px;
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;

    .ProseMirror {
      height: 100%;
      min-height: 100px;
      outline: 0 none;
    }
  }
}
</style>
