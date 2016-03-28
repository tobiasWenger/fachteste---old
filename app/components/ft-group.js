import Ember from 'ember';
import RecognizerMixin from 'ember-gestures/mixins/recognizers';

export default Ember.Component.extend(RecognizerMixin, {
	recognizers: 'swipe',

	change() {
		this.get('hideCheck')();
	},

	actions: {

		deleteGroup() {
			const group = this.get('group');
			const task = group.get('task');

			group.destroyRecord().then(() => {
				task.then((task) => {
					task.save();
				});
			});
			
			this.get('hideCheck')();
		},

		increaseWomen() {
			if (this.get('group.men') > 0) {
				this.decrementProperty('group.men');
			}
		},

		increaseMen() {
			if (this.get('group.men') < this.get('group.task.size')) {
				this.incrementProperty('group.men');
			}
		}
	}
});