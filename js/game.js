board.generate_board();

var bot1 = new Bot();
bot1.title = "bot1";
var bot2 = new Bot();
bot2.title = "bot2";
var bot3 = new Bot();
bot3.title = "bot3";
bot3.has_flag = true;
board.add_bot(bot1);
board.add_bot(bot2);
board.add_bot(bot3);

var player = new Player();
board.add_player(player);
