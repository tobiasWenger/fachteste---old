import Ember from 'ember';

export default Ember.Controller.extend({
	versionYear: 2016,
	actualYear: Ember.computed('', function() {
		let d = new Date();
		return d.getFullYear();
	}),

	isActualVersion: Ember.computed('versionYear', 'actualYear', function() {
		let { versionYear, actualYear } = this.getProperties('versionYear', 'actualYear');
		return (actualYear === versionYear);
	})
});
