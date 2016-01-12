"use strict";

/*function extendedClock(options) {
	Clock.apply(this, arguments);
	this._precision = options.precision || 1000;
}

extendedClock.prototype = Object.create(Clock.prototype);

extendedClock.prototype.start = function() {
	this._render();
	var self = this;

	this._timerId = setTimeout(function() {
		self.start();
	}, this._precision);
}

var clock = new extendedClock({template: 'h:m:s', precision: 3000});

clock.start();*/