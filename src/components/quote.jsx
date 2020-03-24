import React, { Component } from "react";

class Quote extends Component {
    state = {
        quote: "Fetching a quote..."
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                quote: "Chuck cool quote"
            })
        }, 2000);
        // this.setState({
        //     quote: "Chuck cool quote"
        // })
    }
  render() {
      const { quote } = this.state;
    return (
      <div>
        <p>{quote}</p>
      </div>
    );
  }
}


export default Quote;
