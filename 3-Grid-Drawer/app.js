// Select color input
// Select size input
var sumb = document.querySelector('#sizePicker [type="submit"]');

// When size is submitted by the user, call makeGrid()
var cell = document.querySelector('td');
function makeGrid() {
  // Your code goes here!

  const rowLen =document.getElementById("inputHeight").value
  const colLen = document.getElementById("inputWidth").value
  const color = document.getElementById("colorPicker").value
  const pixelCanvas = document.getElementById("pixelCanvas")
  pixelCanvas.innerHTML="";
  for (let i = 0 ; i < rowLen ; i++) {
    tr = document.createElement("tr")
    for (let j=0 ; j < colLen ; j++) {
      td = document.createElement("td")
      tr.appendChild(td)
    }
    pixelCanvas.appendChild(tr)
  }
}
  sumb.addEventListener("click", function (event) {
    event.preventDefault();
    makeGrid()
  });

  pixelCanvas.addEventListener("click", function (event) {
  if (event.target.tagName === "TD") {
    var colval = document.querySelector("#colorPicker").value;
    event.target.style.backgroundColor = colval;
  }})
