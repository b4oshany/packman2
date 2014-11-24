var Player = function(){
  this.title = "player1";
  this.position = [380, 380];
  this.$element = null;

  this.initate = function(){
    var element = document.createElement("div");
    element.setAttribute("id", this.title);
    element.setAttribute("class", "player");
    board.$canvas.append(element);
    this.$element = $(element);
    board.set_position(this.$element,
                       this.position);
  }

  this.get_element = function(){
    this.element = $("#"+this.title);
    return this.element;
  }

  this.move_up = function(){
    var position = this.next_postion(0, -20);
    this.move(position);
  }

  this.move_down = function(){
    var position = this.next_postion(0, 20);
    this.move(position);
  }

  this.move_left = function(){
    var position = this.next_postion(-20, 0);
    this.move(position);
  }

  this.move_right = function(){
    var position = this.next_postion(20, 0);
    this.move(position);
  }

  this.move = function(position){
    if(board.is_position_available(position)){
      this.position = position;
      board.set_position(this.get_element(),
                         this.position);
    }
  }

  this.next_postion = function(x, y){
    var position = []
    position[0] = this.position[0] + x;
    position[1] = this.position[1] + y;
    return position;
  }

  this.movement_listener = function(){
    player = this;
    $(document).on("keyup", function(e){
      if(e.keyCode == 38)
        player.move_up();
      else if(e.keyCode == 40)
        player.move_down();
      else if(e.keyCode == 37)
        player.move_left();
      else if(e.keyCode == 39)
        player.move_right();
    });
  }

  this.initate();
}
