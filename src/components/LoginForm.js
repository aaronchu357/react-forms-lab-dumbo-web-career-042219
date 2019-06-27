import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    return e.target.id === 'username' ? this.setState({username: e.target.value}):this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const name = this.state.username
    const pass = this.state.password
    return name.length > 0 && pass.length > 0 ? this.props.handleLogin(name, pass):alert("Empty fields")
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
