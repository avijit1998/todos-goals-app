import React from "react";
import { handleInitialData } from "../actions/shared";
import Todos from "./Todos";
import Goals from "./Goals";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>;
    }

    return (
      <div>
        <Todos />
        <Goals />
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
