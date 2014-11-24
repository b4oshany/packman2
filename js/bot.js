var Bot = function(){
  this.title = "bot1";
  this.prev_position = [0,0]
  this.cur_position = [0,0];
  this.$element = null;
  this.interval = null;
  this.has_flag = false;

  this.init = function(){
    var element = document.createElement("div");
    element.setAttribute("id", this.title);
    element.setAttribute("class", "bot");
    Board.$canvas.append(element);
    this.$element = $(element);
    Board.set_position(this.$element,
                       this.cur_position)
    return this;
  }

  this.get_element = function(){
    return $("#"+this.title);
  }

  this.alert = function(){
    Signal.show(this.cur_position);
  }

  this.look_up = function(){
    return this.next_postion(0, -20);
  }

  this.look_down = function(){
    return this.next_postion(0, 20);
  }

  this.look_left = function(){
    return this.next_postion(-20, 0);
  }

  this.look_right = function(){
    return this.next_postion(20, 0);
  }

  this.move = function(position){
    if(Board.is_position_available(position)){
      this.prev_position = this.cur_position.slice();
      this.cur_position = position;
      Board.set_position(this.get_element(),
                         this.cur_position);
      Board.is_game_over();
    }
  }

  this.next_postion = function(x, y){
    var position = this.cur_position.slice();
    position[0] += x; position[1] += y;
    Board.alert_position(position);
    return position;
  }

  this.all_moves = function(){
    return [this.look_up(),
            this.look_down(),
            this.look_left(),
            this.look_right()
           ];
  }

  this.get_available_move = function(){
    var moves = this.all_moves();
    var bot = this;
    return moves.filter(function(position, index, arrary){
      return (Board.is_position_available(position) && !Array.compare(bot.prev_position, position));
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
    return this.cur_position
  }

  this.start = function(){
    var bot = this;
    this.interval = setInterval(function(){
      bot.do_move();
    }, 500);
    return this;
  }

  this.stop = function(){
    clearInterval(this.interval);
    return this;
  }
}

Bot.signals = [];
