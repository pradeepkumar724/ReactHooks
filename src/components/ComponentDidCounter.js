import React, { Component } from "react";
class ComponentDidCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }
  updateState = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    document.title = `Count ${this.state.count}`;
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Component Update`);
    }

    document.title = `count ${this.state.count}`;
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.updateState}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ComponentDidCounter;
