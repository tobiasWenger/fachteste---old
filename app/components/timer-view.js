import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({

	startTime: 0,

	minutes: Ember.computed('elapsedTime', function() {
		const elapsedTime = this.get('elapsedTime');
		return 3 - Math.ceil(elapsedTime / 60);
	}),


	seconds: Ember.computed('elapsedTime', function() {
		const elapsedTime = this.get('elapsedTime');
		const elapsedSeconds = elapsedTime % 60;
		let seconds;
		if (elapsedSeconds > 0) {
			seconds = 60 - elapsedSeconds;
		} else {
			seconds = 0;
		}

		if (seconds < 10) {
			seconds = `0${seconds}`;
		}

		return seconds;
	}),

	elapsedTime: 0,



	timer: task(function * () {
    const startTime = this.get('startTime');

    let run = true;
    while (run) {
    	const now = Date.now();
    	const elapsedTime = Math.round((now - startTime) / 1000);
    	this.set('elapsedTime', elapsedTime);
    	if (elapsedTime >= 180) {
    		run = false;
    	}
		  yield timeout(100);
		}

  }).drop(),

	actions: {
		start() {
			const now = Date.now();
			this.set('startTime', now);
			this.get('timer').perform();
		},

		stop() {
			this.get('timer').cancelAll();
		},

		reset() {
			this.get('timer').cancelAll();
			this.set('elapsedTime', 0);
		}
	}
});
