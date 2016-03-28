import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findRecord('user', 1).catch(() => {
			return this.store.createRecord('user', { id: 1 }).save();
		});
	}
});
