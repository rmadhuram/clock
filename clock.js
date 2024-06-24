function init() {
  
  let container = document.querySelector('.seg-container');
  container.innerHTML = `
    <div class="clock">
      <div class="seg seg-a vert off"></div>
      <div class="seg seg-b vert off"></div>
      <div class="seg seg-c horiz on"></div>
      <div class="seg seg-d vert on"></div>
      <div class="seg seg-e vert on"></div>
      <div class="seg seg-f horiz on"></div>
      <div class="seg seg-g horiz on"></div>
    </div>
   `
}

document.addEventListener("DOMContentLoaded", init);