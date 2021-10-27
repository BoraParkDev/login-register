import { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      btnColor: "loginBtn",
    };
  }
  handleIdInput = (e) => {
    this.setState({ id: e.target.value });
  };
  handlePwInput = (e) => {
    this.setState({ pw: e.target.value });
  };
  /* button 조건 */
  handleButton = () => {
    if (this.state.id.includes("@") && this.state.pw.length > 8) {
      this.setState({
        btnColor: "loginAfterBtn",
      });
    } else {
      this.setState({
        btnColor: "loginBtn",
      });
    }
  };

  goToMain = () => {
    if (this.state.btnColor === "loginAfterBtn") {
      this.props.history.push("/main-BoraPark");
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };

  render() {
    return (
      <div id="wrapper">
        <h1 className="logo eng">
          <a href="#">Westagram</a>
        </h1>

        <form className="loginFrm" onKeyUp={this.handleButton}>
          <input
            onChange={this.handleIdInput}
            type="text"
            id="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={this.handlePwInput}
            type="password"
            id="userPw"
            placeholder="비밀번호"
          />
          <button
            type="button"
            className={this.state.btnColor}
            onClick={() => {
              fetch("http://10.58.0.239:8000/users/signin", {
                method: "POST",
                body: JSON.stringify({
                  email: this.state.id,
                  password: this.state.pw,
                }),
              })
                .then((res) => res.json())
                .then((res) => console.log("결과", res));
            }}
          >
            로그인
          </button>
        </form>

        <p>비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default withRouter(Login);
