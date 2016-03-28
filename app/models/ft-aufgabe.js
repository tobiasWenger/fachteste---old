import DS from 'ember-data';
import Ember from 'ember';
import Formulas from '../utils/formulas';

export default DS.Model.extend({
  ft: DS.belongsTo('ft'),
  
  groups: DS.hasMany('ft-gruppe'),

  size: DS.attr('number'),
  number: DS.attr('number'),

  men: Ember.computed.mapBy('groups', 'men'),
  sumMen: Ember.computed.sum('men'),

  women: Ember.computed.mapBy('groups', 'women'),
  sumWomen: Ember.computed.sum('women'),

  sumScore: Ember.computed('groups.@each.score', function() {
  	let sum = 0;

  	this.get('groups').forEach((group) => {
  		sum += parseFloat(group.get('score'));
  	});

  	return sum;
  }),

  mark: Ember.computed('sumMen', 'sumWomen', 'sumScore', 'groups.[]', 'ft.type', 'number', function() {
  	
  	let men      = this.get('sumMen');
  	let women    = this.get('sumWomen');
  	let sumScore = this.get('sumScore');
  	let length   = this.get('groups.length');
  	let type     = this.get('ft.type');
  	let number   = this.get('number');

  	let score = Math.round(sumScore / length * 1000) / 1000;
		

    if (!!type && !!number) {
      let magic = Formulas[type]['task' + number];
      return magic(women, men, score);
    }
		
  }),
});