import DS from 'ember-data';
import Ember from 'ember';
import Formulas from '../utils/formulas';

export default DS.Model.extend({
  task: DS.belongsTo('ft-aufgabe'),

  men: DS.attr('number'),
  women: Ember.computed('men', 'task.size', function() {
  	return this.get('task.size') - this.get('men');
  }),
  score: DS.attr('number'),
  mark: Ember.computed('score', 'men', 'women', function() {
  	let { men, women, score } = this.getProperties('men', 'women', 'score');

  	let type     = this.get('task.ft.type');
  	let number   = this.get('task.number');
  	
		let magic = Formulas[type]['task' + number];

  	return magic(women, men, score);
  })
});
