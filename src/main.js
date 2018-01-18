(function () {

  var iterateObject = function(object, callback) {
    for (var property in object) {
      if (object.hasOwnProperty(property)) {
        callback(property, object[property])
      }
    }
  }

  window.h = function (tag, opts) {
    opts = opts || {}
    var element = document.createElement(tag)

    if (opts.attrs) {
      iterateObject(opts.attrs, function(key, value) {
        element.setAttribute(key, value)
      })
    }

    if (opts.listeners) {
      iterateObject(opts.listeners, function(key, value) {
        element.addEventListener(key, value)
      })
    }

    if (opts.children) {
      for (var i = 0; i < opts.children.length; i++) {
        var child = opts.children[i]
        element.appendChild(child)
      }
    }

    if (opts.content) {
      element.textContent = opts.content
    }

    return element
  }
})()
