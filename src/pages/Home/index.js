import React from "react";
import BackgroundImage from "../components/BackgroundImage";

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <BackgroundImage feature={this.props.featured[0]} />
      </div>
    );
  }
}
