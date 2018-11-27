import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import pluralize from "pluralize";
import Input from "../../common/components/Input";
import { pick } from "lodash";
import { setValue, submit } from "./redux";
import styled from "styled-components";

const Button = styled.button.attrs({
  className: "btn btn-lg btn-primary btn-block"
})`
  &:disabled {
    background: saddlebrown;
  }
  background: ${props => (props.loading ? "saddlebrown" : "mediumseagreen")};
`;

const targetTime = moment("2018-11-27 17:00:00.000");

const mapStateToProps = state =>
  pick(state.home, [
    "loading",
    "fullName",
    "email",
    "acceptTerms",
    "countdownText",
    "successMessage",
    "errorMessage"
  ]);

// const mapStateToProps = state => ({
//   loading: state.loading,
//   fullName: state.fullName,
//   email: state.email,
//   acceptTerms: state.acceptTerms,
//   countdownText: state.countdownText,
//   successMessage: state.successMessage,
//   errorMessage: state.errorMessage
// });

const mapDispatchToProps = {
  setValue,
  submit
};

/*
const mapDispatchToProps = dispatch => ({
  setValue: (key, value) => dispatch(setValue(key, value))

});
*/

/*
const mapDispatchToProps = dispatch => ({
  setFullName: value => dispatch(setFullName(value)),
  setEmail: value => dispatch(setEmail(value)),
  setAgreeTerms: value => dispatch(setAgreeTerms(value)),
  setCountDownText: value => dispatch(setCountDownText(value))
});
*/

class App extends Component {
  componentDidMount() {
    const updateTimmer = () => {
      const millis = targetTime.diff(moment());
      const duration = moment.duration(millis);
      const seconds = duration.seconds();
      const minutes = duration.minutes();
      const hours = parseInt(duration.asHours());
      this.props.setValue(
        "countdownText",
        hours +
          " " +
          pluralize("Hours", hours) +
          " " +
          minutes +
          " " +
          pluralize("minutes", minutes) +
          " " +
          seconds +
          " " +
          pluralize("seconds", seconds)
      );
    };
    updateTimmer();
    setInterval(() => {
      //updateTimmer();
    }, 1000);
  }
  submit = async e => {
    e.preventDefault();
    const data = await this.props.submit(this.props.fullName, this.props.email);
    console.log(data);
    this.props.history.push("/form/success/win!!!");
  };
  render() {
    const { fullName, email, acceptTerms, countdownText } = this.props;

    return (
      <form className="form-signin" onSubmit={this.submit}>
        <p>{countdownText}</p>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <Input
          type="text"
          id="inputName"
          label="Full name"
          required
          onChange={value => {
            this.props.setValue("fullName", value);
            console.log(fullName);
          }}
          value={fullName}
        />
        <label htmlFor="inputEmail" className="sr-only">
          Email
        </label>
        <Input
          type="email"
          id="inputEmail"
          label="Email"
          required
          onChange={value => {
            this.props.setValue("email", value);
            console.log(email);
          }}
          value={email}
        />
        <div className="checkbox mb-3">
          <label>
            <input
              type="checkbox"
              value="remember-me"
              onChange={e => {
                this.props.setValue("acceptTerms", e.target.checked);
                console.log(acceptTerms);
              }}
              checked={acceptTerms}
            />
            Accept Terms
          </label>
        </div>
        <Button type="submit" disabled={this.props.loading}>
          {this.props.loading ? "Loading ..." : "Sign in"}
        </Button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        <p>{this.props.successMessage}</p>
        <p>{this.props.errorMessage}</p>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
