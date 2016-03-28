import Ember from 'ember';
import CreateDefaultTasks from "../mixins/createDefaultTasks";

export default Ember.Route.extend(CreateDefaultTasks, {
	model() {
		return this.store.findRecord('user', 1).then((user) => {
			const ftUnihockeys = user.get('ftUnihockeys');
		
			if (ftUnihockeys.get('length') === 0) {
				const ft = this.createDefault([3,6], 'FTU');
				ftUnihockeys.pushObject(ft);
			}

			return ftUnihockeys;
		});
	}
});