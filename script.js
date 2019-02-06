let container = document.getElementById('container');
let size = prompt("Quelle taille de côté ?");
let gridSize = size ** 2;
// On crée les divs (16X16)
for (let i=0; i < gridSize ; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "gridElement");
  container.appendChild(div);
}
