var cloud1 = document.getElementById('cloud1')
var cloud3 = document.getElementById('cloud3')
var cloud2 = document.getElementById('cloud2')
var cloud4 = document.getElementById('cloud4')
function comparison () {
  var x = document.getElementsByClassName('img-comp-overlay')
  for (var i = 0; i < x.length; i++) {
    compareImage(x[i])
  }

  function compareImage (img) {
    var slider
    var clicked = 0
    var w = img.offsetWidth
    var h = img.offsetHeight
    img.style.width = (w / 2) + 'px'
    slider = document.createElement('div')
    slider.setAttribute('class', 'img-comp-slider')
    img.parentElement.insertBefore(slider, img)
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 'px'
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + 'px'
    slider.addEventListener('mousedown', slideReady)
    slider.addEventListener('mouseup', slideFinish)

    function slideReady (e) {
      e.preventDefault()
      clicked = 1
      window.addEventListener('mousemove', slideMove)
    }
    function slideFinish () {
      clicked = 0
    }
    function slideMove (e) {
      var pos
      if (clicked === 0) {
        return false
      }
      pos = getCursorPos(e)
      if (pos < 0) {
        pos = 0
      }
      if (pos >= w) {
        pos = w
      }
      slide(pos)
    }
    function getCursorPos (e) {
      var a = img.getBoundingClientRect()
      e = e || window.event
      x = e.pageX - a.left
      return x
    }
    function slide (x) {
      img.style.width = x + 'px'
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + 'px'
      cloud1.style.left = (x / 85) + 'vw' // 6.5
      cloud3.style.left = (x / 25) + 'vw' // 22.4
      cloud2.style.left = (x / 10) + 'vw' // 56
      cloud4.style.left = (x / 7) + 'vw' // 80
    }
  }
}

comparison()
