Math.random_between = function(x, y){
  return Math.floor((Math.random()*x))+y;
}

Array.compare = function(array1, array2){
  return JSON.stringify(array1) === JSON.stringify(array2)
}

Array.is_empty = function(array){
  return array[0] != undefined
}

var board = {
  $canvas: null,
  num_block: 77,
  generate_board: function(){
    this.get_canvas();
    for(var i = 0; i < this.num_block; i++){
      block = document.createElement("div");
      block.setAttribute("class", "block");
      block.setAttribute("id", "block"+i);
      this.$canvas.append(block);
      $block = $(block);
      this.block_map($block);
    }
  },
  block_map: function(block){
    var p = block.position();
    var h = block.height();
    var w = block.width();
    for(var i = 0; i < h/20; i++){
      block.addClass(p.left+"x"+(p.top+(i*20)));
    }
    for(var i = 0; i < w/20; i++){
      block.addClass((p.left+(i*20))+"x"+p.top);
    }
  },
  get_canvas: function(){
    this.$canvas = $("#canvas");
  },
  is_position_available: function(position){
    // TODO: check if new position is empty.
    var x = position[0], y = position[1];
    var next_position = $("."+x+"x"+y)[0];
    if(x >= 0 && x <= 380 && y >= 0 && y <= 380 && next_position == undefined)
      return true
    return false;
  },
  set_position: function($element, position){
    $element.css({
      "top": position[1]+"px",
      "left": position[0]+"px"
    });
  }
};






