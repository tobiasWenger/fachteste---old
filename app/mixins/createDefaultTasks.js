import Ember from 'ember';

export default Ember.Mixin.create({

	createDefault(tasks, type) {
		const store = this.get('store');

		let ft = store.createRecord('ft', {
			type: type,
			displayed: true,
			date: Date.now(),
			lastAccessed: Date.now()
		});

		let i = 1;

		tasks.forEach((task) => {
			let newTask = store.createRecord('ft-aufgabe', {
				size: task,
				number: i,
				ft: ft
			});

			store.createRecord('ft-gruppe', {
				men: task,
				task: newTask
			});

			i++;
		});

		return ft;
		
	}
	
});
