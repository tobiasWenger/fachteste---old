export default function(){
  this.transition(
    this.toRoute('settings'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('ft-sub-menu'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('ft-selection'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ft-selection'),
    this.toRoute('timer'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('timer'),
    this.toRoute('settings'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ft-selection'),
    this.toRoute('ft-allround'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ft-selection'),
    this.toRoute('ft-korbball'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ft-selection'),
    this.toRoute('ft-unihockey'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ft-selection'),
    this.toRoute('ft-volleyball'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.hasClass('liquid-list'),
    this.toValue(true),
    this.use('toLeft'),
    this.reverse('toRight')
  );


  this.transition(
    this.childOf('.liquid-slide-up'),
    this.use('toUp')
  );
}