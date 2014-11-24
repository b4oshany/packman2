Board.generate_Board();

var bot1 = new Bot();
bot1.title = "bot1";
var bot2 = new Bot();
bot2.title = "bot2";
var bot3 = new Bot();
bot3.title = "bot3";
bot3.has_flag = true;
Board.add_bot(bot1);
Board.add_bot(bot2);
Board.add_bot(bot3);

var player = new Player();
Board.add_player(player);
Signal.create();
