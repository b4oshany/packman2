$canvas = $("#canvas");

num_block = 77;
for(var i = 0; i < num_block; i++){
  block = document.createElement("div");
  block.setAttribute("class", "block");
  $canvas.append(block);
}
