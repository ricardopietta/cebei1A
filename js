function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("orange");
  
  fill("black");
     
  textSize(60);
  
  textAlign(CENTER,CENTER);
    
  let maximo = width;
  let minimo = 0;
  
   let palavra = "Experiência";
  
  let quantidade = map(mouseX, 0, width, 0, palavra.length);  console.log(quantidade);
  
  let parcial = palavra.substring(0,quantidade);
  text(parcial, 200, 200);
  
  
}
