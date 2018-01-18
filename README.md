# h.js

Simple and Lightweight tool to manipulate DOM, avoiding string interpolation

# Usage

```javascript
var form = h('form', { children: [
  h('h1', { content: 'Title' }),
  h('div', { children: [
    h('label', { content: 'Label1: ' }),
    h('select', {
      attrs: { id: 'rule' },
      children: [
        h('option', { attrs: { value: '1' }, content: 'First' }),
        h('option', { attrs: { value: '2' }, content: 'Second' }),
        h('option', { attrs: { value: '3' }, content: 'Third' })
      ]
    })
  ]}),
  h('div', { children: [
    h('label', { content: 'Label2: ' }),
    h('input', { attrs: { type: 'text', id: 'field-1' } })
  ]}),
]})

document.body.appendChild(form)
```
