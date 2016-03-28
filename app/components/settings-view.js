import Ember from 'ember';

export default Ember.Component.extend({
	showDeleteConfirm: false,

	actions: {
		toggleShowDeleteConfirm() {
			this.toggleProperty('showDeleteConfirm');
		},

		deleteConfirmed() {
			localStorage.fachteste = '';
			this.toggleProperty('showDeleteConfirm');
		}
	}
});
