<template>
  <div class="container">
    <span>123<span>456</span></span>
    <div class="editor" ref="editor1"></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { Editor, Mark, mergeAttributes } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'

const createEditor = (element, extensions) => {
  return new Editor({
    element,
    extensions
  })
}

const SpanMark = Mark.create({
  name: 'SpanMark',
  priority: 110,
  parseHTML () {
    return [
      {
        tag: 'span'
      }
    ]
  },
  renderHTML () {
    return ['span', mergeAttributes({}), 0]
  }
})

export default defineComponent({
  name: 'HomeView',
  setup () {
    const editor1 = ref()

    onMounted(() => {
      createEditor(editor1.value, [StarterKit, SpanMark])
    })

    return {
      editor1
    }
  }
})
</script>
