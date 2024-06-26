function genDisplay(containerClass) {
  let container = document.querySelector(containerClass);
}

const SEGS = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const SEGMAP = [
  [1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1]
]

class Separator {
  constructor() {
    let container = document.querySelector('.seg-container');
    let div = document.createElement('div');
    div.className = 'separator'

    div.innerHTML = `
        <div class="sep top"></div>
        <div class="sep bottom"></div>
     `
     container.append(div)
  }
}

class SevenSeg {
  constructor(id) {
    this.id = id

    let container = document.querySelector('.seg-container');
    let div = document.createElement('div');
    div.className = 'seven-seg-display'
    div.id = id

    div.innerHTML = `
        <div class="seg seg-a vert off"></div>
        <div class="seg seg-b vert off"></div>
        <div class="seg seg-c horiz off"></div>
        <div class="seg seg-d vert off"></div>
        <div class="seg seg-e vert off"></div>
        <div class="seg seg-f horiz off"></div>
        <div class="seg seg-g horiz off"></div>
     `
     container.append(div)
  }

  // set a segment
  setSeg(element, segId) {
    let segElem = element.getElementsByClassName('seg-' + segId)[0]
    segElem.classList.remove('off')
    segElem.classList.add('on')
  }

  // un-set a segment
  unsetSeg(element, segId) {
    let segElem = element.getElementsByClassName('seg-' + segId)[0]
    segElem.classList.remove('on')
    segElem.classList.add('off')
  }

  setValue(n) {
    const element = document.getElementById(this.id);
    let map = SEGMAP[n]
    let idx = 0
    for (let seg of SEGS) {
      if (map[idx]) {
        this.setSeg(element, seg)
      } else {
        this.unsetSeg(element, seg)
      }
      idx++
    }
  }
}

function init() {
  let hr_10 = new SevenSeg('hr_10')
  let hr_01 = new SevenSeg('hr_01')
  new Separator()
  let min_10 = new SevenSeg('min_10')
  let min_01 = new SevenSeg('min_01')
  new Separator()
  let sec_10 = new SevenSeg('sec_10')
  let sec_01 = new SevenSeg('sec_01')

  function setTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hr_10.setValue(Math.floor(hours/10))
    hr_01.setValue(hours % 10)
    min_10.setValue(Math.floor(minutes/10))
    min_01.setValue(minutes % 10)
    sec_10.setValue(Math.floor(seconds/10))
    sec_01.setValue(seconds % 10)
  }

  setInterval(setTime, 1000)
}


document.addEventListener("DOMContentLoaded", init);