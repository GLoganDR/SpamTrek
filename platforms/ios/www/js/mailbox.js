/* exported Mailbox */

var Mailbox = (function(){
  'use strict';

  function Mailbox(game){
    this.width  = 90;
    this.height = 90;
    this.x      = (0, game.canvas.width - this.width);
    this.y      = (0, game.canvas.height - this.height);
    this.cX     = this.x + (this.width / 2);
    this.cY     = this.y + (this.height / 2);
    this.r      = this.width / 2;
  }

  Mailbox.prototype.draw = function(game){
    game.ctx.drawImage(game.assets.mailbox, this.x, this.y, this.width, this.height);
  };

  Mailbox.prototype.isSpamInside = function(ball){
    var sumsquares = Math.pow(this.cX - spam.cX, 2) + Math.pow(this.cY - spam.cY, 2),
        distance   = Math.sqrt(sumsquares);

    return distance < (this.r * 0.25);
  };

  return Mailbox;
})();
