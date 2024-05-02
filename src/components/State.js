import { Component } from "react";
class State extends Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ change: !this.state.change });
          }}
        >
          State button
        </button>
        {this.state.change ? (
          <h1>Simple class component renders - state</h1>
        ) : (
          <h1>Toggles - state</h1>
        )}
      </div>
    );
  }
}

export default State;
//Simple class component renders
