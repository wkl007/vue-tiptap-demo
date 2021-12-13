<template>
  <div class="container">
    <a-typography-title :level="3">span 嵌套</a-typography-title>
    <span id="1" style="font-size: 14px;color: red">没有嵌套<span style="font-size: 18px;color: blue">嵌套一层<span
      style="font-size: 22px;color: green">嵌套二层<span
      style="font-size: 26px;color: deeppink">嵌套三层<span
      style="font-size: 26px;color: deeppink">嵌套四层</span></span></span></span></span>
    <a-typography-title :level="3">b 嵌套</a-typography-title>
    <b style="font-size: 14px;color: red">没有嵌套<b style="font-size: 18px;color: blue">嵌套一层<b
      style="font-size: 22px;color: green">嵌套二层<b
      style="font-size: 26px;color: deeppink">嵌套三层<b
      style="font-size: 26px;color: deeppink">嵌套四层</b></b></b></b></b>
    <a-typography-title :level="3">strong 嵌套</a-typography-title>
    <strong style="font-size: 14px;color: red">没有嵌套<strong style="font-size: 18px;color: blue">嵌套一层<strong
      style="font-size: 22px;color: green">嵌套二层<strong
      style="font-size: 26px;color: deeppink">嵌套三层<strong
      style="font-size: 26px;color: deeppink">嵌套四层</strong></strong></strong></strong></strong>
    <a-typography-title :level="3">em 嵌套</a-typography-title>
    <em style="font-size: 14px;color: red">没有嵌套<em style="font-size: 18px;color: blue">嵌套一层<em
      style="font-size: 22px;color: green">嵌套二层<em
      style="font-size: 26px;color: deeppink">嵌套三层<em
      style="font-size: 26px;color: deeppink">嵌套四层</em></em></em></em></em>
    <a-typography-title :level="4">未处理样式</a-typography-title>
    <div class="editor" ref="editor1"></div>
    <a-typography-title :level="4">已处理样式</a-typography-title>
    <div class="editor" ref="editor2"></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { Editor, Mark, mergeAttributes } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import _ from 'lodash'

const toStyleText = (style) => {
  const compatStyle = Object.create(null)
  Object.keys(style).forEach((key) => {
    if (style[key]) {
      compatStyle[key] = style[key]
    }
  })

  return Object.keys(compatStyle)
    .map((i) => {
      const ruleKey = _.kebabCase(i)
      return `${ruleKey}: ${compatStyle[i]}`
    })
    .join('; ')
}

const createEditor = (element, extensions) => {
  return new Editor({
    element,
    extensions
  })
}

const SpanMark1 = Mark.create({
  name: 'SpanMark1',
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

const SpanMark2 = Mark.create({
  name: 'SpanMark2',
  priority: 110,
  parseHTML () {
    return [
      {
        tag: 'span'
      }
    ]
  },
  addAttributes () {
    return {
      fontSize: {
        parseHTML: (element) => {
          return element.style.fontSize
        }
      },
      color: {
        parseHTML: (element) => {
          return element.style.color
        }
      }
    }
  },
  renderHTML ({ mark: node }) {
    const {
      fontSize,
      color
    } = node.attrs
    const attrs = {
      style: toStyleText({
        fontSize,
        color
      })
    }
    return ['span', mergeAttributes({}, attrs), 0]
  }
})

const BoldMark1 = Mark.create({
  name: 'BoldMark1',
  priority: 110,
  parseHTML () {
    return [
      {
        tag: 'strong'
      },
      {
        tag: 'b',
        getAttrs: node => node.style.fontWeight !== 'normal' && null
      },
      {
        style: 'font-weight',
        getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
      }
    ]
  },
  renderHTML () {
    return ['strong', mergeAttributes({}), 0]
  }
})

const BoldMark2 = Mark.create({
  name: 'BoldMark2',
  priority: 110,
  parseHTML () {
    return [
      {
        tag: 'strong'
      },
      {
        tag: 'b',
        getAttrs: node => node.style.fontWeight !== 'normal' && null
      },
      {
        style: 'font-weight',
        getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
      }
    ]
  },
  addAttributes () {
    return {
      fontSize: {
        parseHTML: (element) => {
          return element.style.fontSize
        }
      },
      color: {
        parseHTML: (element) => {
          return element.style.color
        }
      }
    }
  },
  renderHTML ({ mark: node }) {
    const {
      fontSize,
      color
    } = node.attrs
    const attrs = {
      style: toStyleText({
        fontSize,
        color
      })
    }
    return ['strong', mergeAttributes({}, attrs), 0]
  }
})

const EmMark1 = Mark.create({
  name: 'EmMark1',
  priority: 110,
  parseHTML () {
    return [
      {
        tag: 'em'
      }
    ]
  },
  renderHTML () {
    return ['em', mergeAttributes({}), 0]
  }
})

const EmMark2 = Mark.create({
  name: 'EmMark2',
  priority: 110,
  parseHTML () {
    return [
      {
        tag: 'em'
      }
    ]
  },
  addAttributes () {
    return {
      fontSize: {
        parseHTML: (element) => {
          return element.style.fontSize
        }
      },
      color: {
        parseHTML: (element) => {
          return element.style.color
        }
      }
    }
  },
  renderHTML ({ mark: node }) {
    const {
      fontSize,
      color
    } = node.attrs
    const attrs = {
      style: toStyleText({
        fontSize,
        color
      })
    }
    return ['em', mergeAttributes({}, attrs), 0]
  }
})

export default defineComponent({
  name: 'HomeView',
  setup () {
    const editor1 = ref()
    const editor2 = ref()

    onMounted(() => {
      createEditor(editor1.value, [StarterKit, SpanMark1, BoldMark1, EmMark1])
      createEditor(editor2.value, [StarterKit, SpanMark2, BoldMark2, EmMark2])
    })

    return {
      editor1,
      editor2
    }
  }
})
</script>
