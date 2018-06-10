class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinisOne = this.handleMinisOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    this.setState(prevState => {
     return {
       count: prevState.count + 1
     };
    });
  }
  handleMinisOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinisOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'))