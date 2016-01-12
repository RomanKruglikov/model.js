"use strict";

/*function Clock(options) {
	this._template = options.template;
}

Clock.prototype._render = function() {
	var date = new Date();

	var hours = date.getHours();
	if (hours < 10) {
		hours = '0' + hours;
	}

	var minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	var seconds = date.getSeconds();
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	var output = this._template.replace('h', hours).replace('m', minutes).replace('s', seconds);
	console.log(output);
};

Clock.prototype.start = function() {
	this._render();
	var self = this;

	this._timerId = setTimeout(function() {
		self.start();
	}, 1000);
};

Clock.prototype.stop = function() {
	clearInterval(this._timerId);
};*/

//>>>>>>>>>>>>>>>>>MENU<<<<<<<<<<<<<<<
function Menu(state) {
	this._state = state || STATE_CLOSED;
}

Menu.prototype.STATE_CLOSED = 0;
Menu.prototype.STATE_OPEN = 1;

Menu.prototype.open = function() {
	this._state = STATE_OPEN;
};

Menu.prototype.close = function() {
	this._state = STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
	if (this.STATE_OPEN) {
		return 'Открыто';
	} else {
		return 'Закрыто';
	}
};

Menu.prototype.showState = function() {
	alert(_stateAsString());
};