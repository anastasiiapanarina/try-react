'use strict';

console.log('App is running');

//JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two'],
  renderOptions: function renderOptions() {
    return React.createElement(
      'ol',
      null,
      this.options.map(function (item) {
        return React.createElement(
          'li',
          { key: item },
          item
        );
      })
    );
  }
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.options.value;

  if (option) {
    app.options.push(option);
    console.log(app.options);
    e.target.elements.options.value = '';
    renderTemplate();
  }
};

var removeList = function removeList() {
  app.options = [];
  renderTemplate();
};

var getLocation = function getLocation(location) {
  return location && React.createElement(
    'p',
    null,
    'Location: ',
    location
  );
};

var count = 0;
var addOne = function addOne() {
  ++count;
  console.log(count);
};
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { id: 'my-id', onClick: addOne },
    '+1'
  )
);

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeList },
      'Remove All'
    ),
    app.renderOptions(),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'options' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
