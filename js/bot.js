var Bot = function(){
  this.title = "bot1";
  this.prev_position = [0,0]
  this.cur_position = [0,0];
  this.signal = [[380, 380]];
  this.$element = null;
  this.interval = null;

  this.initate = function(){
    var element = document.createElement("div");
    element.setAttribute("id", this.title);
    element.setAttribute("class", "bot");
    board.$canvas.append(element);
    this.$element = $(element);
    board.set_position(this.$element,
                       this.cur_position)
    this.start();
  }

  this.get_element = function(){
    return $("#"+this.title);
  }

  this.move_up = function(){
    return this.next_postion(0, -20);
  }

  this.move_down = function(){
    return this.next_postion(0, 20);
  }

  this.move_left = function(){
    return this.next_postion(-20, 0);
  }

  this.move_right = function(){
    return this.next_postion(20, 0);
  }

  this.move = function(position){
    if(board.is_position_available(position)){
      this.prev_position = this.cur_position.slice();
      this.cur_position = position;
      board.set_position(this.get_element(),
                         this.cur_position);
    }
  }

  this.next_postion = function(x, y){
    var position = this.cur_position.slice();
    position[0] += x; position[1] += y;
    return position;
  }

  this.get_available_move = function(){
    var position = [this.move_up(),
                    this.move_down(),
                    this.move_left(),
                    this.move_right()
                   ]
    var bot = this;
    return position.filter(function(position, index, arrary){
      return (board.is_position_available(position) && !Array.compare(bot.prev_position, position));
    });
  }

  this.random_move = function(){
    var available_move = this.get_available_move();
    var am_len = available_move.length;
    var position = Math.random_between(400, 1)% am_len;
    return (Array.is_empty(available_move))? available_move[position]: this.prev_position;
  }

  this.best_move = function(){
    return this.random_move();
  }

  this.do_move = function(position){
    if(position == undefined)
      var move = this.random_move();
    else
      var move = this.best_move();
    this.move(move);
  }

  this.start = function(){
    this.interval = setInterval(function(){
      bot1.do_move();
    }, 1500);
  }

  this.stop = function(){
    clearInterval(this.interval);
  }

  this.initate();
}
