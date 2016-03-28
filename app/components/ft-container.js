import Ember from 'ember';
import CreateDefaultTasks from "../mixins/createDefaultTasks";

export default Ember.Component.extend(CreateDefaultTasks, {
	showList: false,

	sortingAccessed: ['lastAccessed:desc'],
  sortedAccessed: Ember.computed.sort('fts', 'sortingAccessed'),

  sortingDate: ['date:desc'],
  sortedDate: Ember.computed.sort('fts', 'sortingDate'),


	ft: Ember.computed('sortedAccessed.@each.lastAccessed', function() {
		return this.get('sortedAccessed.firstObject');
	}),

	showCheckmark: false,

	actions: {

		back() {
			if (this.get('showList')) {
				this.set('showList', false);
			} else {
				window.history.back();
			}
		},

		hideCheck() {
			this.set('showCheckmark', false);
		},

		selectFt(ft) {
			ft.set('lastAccessed', Date.now());
			this.set('showList', false);
		},

		toggleShowList() {
			this.toggleProperty('showList');
		},

		save() {
			const ft = this.get('ft');

			ft.save();

			ft.get('user').then((user) => {
				user.save();
			});

			ft.get('tasks').then((tasks) => {
				tasks.forEach((task) => {
					task.save();
					task.get('groups').then((groups) => {
						groups.forEach((group) => {
							group.save();
							this.set('showCheckmark', true);
						});
					});
				});
			});

		},

		clear() {
			const { ft, fts, store } = this.getProperties('ft', 'fts', 'store');

			if (ft.get('isNew')) {
				let toDelete = [];

				ft.get('tasks').forEach((task) => {
					// delete existing groups
					task.get('groups').forEach((group) => {
						toDelete.push(group);
					});

					// create default groups
					store.createRecord('ft-gruppe', {
						men: task.get('size'),
						task: task
					});
				});

				toDelete.forEach((group) => {
					group.destroyRecord();
				});
			} else {
				let tasks = [];
				const type = ft.get('type');

				ft.get('tasks').forEach((task) => {
					tasks.push(task.get('size'));
				});

				let newFt = this.createDefault(tasks, type);

				fts.pushObject(newFt);
			}
			
		}
	}
});