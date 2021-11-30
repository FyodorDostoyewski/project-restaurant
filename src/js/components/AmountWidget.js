import {settings, select} from '../settings.js';

// import AmountWidget from './components/amountWidget';

class AmountWidget{
  constructor(element){
    const thisWidget = this;

    thisWidget.getElements(element);
    thisWidget.initAction();
    thisWidget.setValue(thisWidget.input.value || settings.amountWidget.defaultValue);

    // console.log('AmountWidget:', thisWidget);
    // console.log('constructor arguments:', element);
  }
  getElements(element){
    const thisWidget = this;

    thisWidget.element = element;
    thisWidget.input = thisWidget.element.querySelector(select.widgets.amount.input);
    thisWidget.linkDecrease = thisWidget.element.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.linkIncrease = thisWidget.element.querySelector(select.widgets.amount.linkIncrease);


  }
  setValue(value){
    const thisWidget = this;
    const newValue = parseInt(value);

    /* TODO: Add validation */
    if (thisWidget.value !== newValue
      && !isNaN(newValue)
      && settings.amountWidget.defaultMin <= newValue
      && settings.amountWidget.defaultMax >= newValue) {
      thisWidget.value = newValue;
    }
    thisWidget.announce();
    thisWidget.input.value = thisWidget.value;
  }

  initAction(){
    const thisWidget = this;
    thisWidget.input.addEventListener('change', function(){
      event.preventDefault();
      thisWidget.setValue(thisWidget.input.value);
    });
    thisWidget.linkDecrease.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value - 1);

    });
    thisWidget.linkIncrease.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value + 1);
    });
  }

  announce(){
    const thisWidget = this;
    const event = new Event('updated');
    thisWidget.element.dispatchEvent(event);
  }

}

export default AmountWidget;
