import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	user: DS.belongsTo('user', { inverse: null }),
  tasks: DS.hasMany('ft-aufgabe'),

  type: DS.attr('string'),
  date: DS.attr('number'),
  lastAccessed: DS.attr('number'),

  mark: Ember.computed('tasks.@each.mark', function() {
  	
  	let sumPlayers = 0;
  	let sumMarks = 0;

  	this.get('tasks').forEach((task) => {
  		let { mark, sumMen, sumWomen } = task.getProperties('mark', 'sumMen', 'sumWomen');

  		mark = Math.round(mark * 100) / 100;
      let size = sumMen + sumWomen;

  		sumMarks += mark * size;
  		sumPlayers += size;
  	});

  	return sumMarks / sumPlayers;
  })
});
