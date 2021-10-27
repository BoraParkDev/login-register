import { Component } from "react";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      phone_number: "",
      age: "",
      // btnColor: 'loginBtn',
    };
  }
  handleNameInput = (e) => {
    this.setState({ name: e.target.value });
  };
  handleIdInput = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePwInput = (e) => {
    this.setState({ password: e.target.value });
  };

  handlePhoneInput = (e) => {
    this.setState({ phone_number: e.target.value });
  };
  handleAgeInput = (e) => {
    this.setState({ age: e.target.value });
  };
  handleButton = () => {
    if (
      this.state.email.includes("@") &&
      this.state.email.includes(".") &&
      this.state.password.length > 8
    ) {
      this.setState({
        btnColor: "loginAfterBtn",
      });
    } else {
      this.setState({
        btnColor: "loginBtn",
      });
    }
  };

  goToLogin = () => {
    fetch("http://10.58.0.239:8000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone_number: this.state.phone_number,
        age: this.state.age,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log("결과", res));
  };

  render() {
    return (
      <div id="wrapper">
        <h1 className="logo eng">
          <a href="#">Westagram</a>
        </h1>

        <div className="loginFrm" onKeyUp={this.handleButton}>
          <input
            onChange={this.handleNameInput}
            type="text"
            id="userPw"
            placeholder="이름을 입력해주세요"
          />
          <input
            onChange={this.handleIdInput}
            type="text"
            id="userId"
            placeholder="이메일을 입력해주세요"
          />
          <input
            onChange={this.handlePwInput}
            type="password"
            id="userPw"
            placeholder="비밀번호를 입력해주세요."
          />
          <input
            onChange={this.handlePhoneInput}
            type="text"
            id="userPw"
            placeholder="휴대폰번호를 입력해주세요"
          />
          <input
            onChange={this.handleAgeInput}
            type="text"
            id="userPw"
            placeholder="나이를 입력해주세요"
          />
          <button
            className="regBtn"
            // type="submit"
            className={this.state.btnColor}
            onClick={this.goToLogin}
          >
            회원가입
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
