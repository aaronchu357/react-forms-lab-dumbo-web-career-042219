import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: '',
    charLeft: this.props.maxChars
  }

  handleChange = (e) => {
    const inputValue = e.target.value
    const charLeft = this.state.charLeft - 1
    return inputValue.length <= this.props.maxChars ? this.setState({ message: inputValue, charLeft: (charLeft) }, () => console.log(this.state.message)) : this.state.message
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        {this.state.charLeft} characters left
      </div>
    );
  }
}

export default TwitterMessage;
