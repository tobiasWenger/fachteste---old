import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addGroup() {
			let task = this.get('task');

			this.get('task.store').createRecord('ft-gruppe', {
				men: task.get('size'),
				task: task
			});

			this.get('hideCheck')();
		}
	}
});
