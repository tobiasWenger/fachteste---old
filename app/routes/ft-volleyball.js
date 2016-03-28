import Ember from 'ember';
import CreateDefaultTasks from "../mixins/createDefaultTasks";

export default Ember.Route.extend(CreateDefaultTasks, {
	model() {
		return this.store.findRecord('user', 1).then((user) => {
			const ftVolleyballs = user.get('ftVolleyballs');
		
			if (ftVolleyballs.get('length') === 0) {
				const ft = this.createDefault([3,6], 'FTV');
				ftVolleyballs.pushObject(ft);
			}

			return ftVolleyballs;
		});
	}
});