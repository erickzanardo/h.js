(function () {
  window.h = (tag, opts = {}) => {
    const element = document.createElement(tag)

    if (opts.attrs) {
      Object.entries(opts.attrs).forEach(([key, value]) => {
        element.setAttribute(key, value)
      })
    }

    if (opts.listeners) {
      Object.entries(opts.listeners).forEach(([key, value]) => {
        element.addEventListener(key, value)
      })
    }

    if (opts.children) {
      opts.children.forEach(child => element.appendChild(child))
    }

    if (opts.content) {
      element.textContent = opts.content
    }

    return element
  }
})()
