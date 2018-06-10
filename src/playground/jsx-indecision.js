console.log('App is running');

//JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two'],
  renderOptions() {
    return <ol>{this.options.map(item => <li key={item}>{item}</li>)}</ol>;
  }
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.options.value;

  if (option) {
    app.options.push(option);
    console.log(app.options);
    e.target.elements.options.value = '';
    renderTemplate();
  }
};

const removeList = () => {
  app.options = [];
  renderTemplate();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  //console.log(randomNum);
  const option = app.options[randomNum];
  console.log(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
      <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeList}>Remove All</button>
      {app.renderOptions()}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="options" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();



// ----------------------------------
// App 2
// ----------------------------------
const getLocation = (location) => {
  return location && <p>Location: {location}</p>;
};

let count = 0;
const addOne = () => {
  ++count;
  console.log(count);
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button id="my-id" onClick={addOne}>+1</button>
  </div>
);