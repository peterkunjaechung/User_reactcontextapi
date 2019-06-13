import React from "react";
import { Form, Button, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = { username: this.props.username, membershipLevel: this.props.membershipLevel, };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    const account = { ...this.state, };
    this.props.updateAccount(account);
  }
  
  render() {
    const { username, membershipLevel, email, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />

        <Form.Input
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />



        <Form.Select
          label="Avatar"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color="light green">Save</Form.Button>
      </Form>
    )
  }
}

const membershipOptions = [
  { key: "b", text: "Bear", value: "Bear", },
  { key: "s", text: "Snake", value: "Snake", },
  { key: "g", text: "Giraffe", value: "Giraffe", },
  { key: "p", text: "Pig", value: "Pig", },
  { key: "l", text: "Lion", value: "Lion", },
  { key: "t", text: "Turtle", value: "Turtle", },
  { key: "d", text: "Deer", value: "Deer", },
];

const ConnectedAccountForm = (props) => {
    return (
      <AccountConsumer>
        { value => (
          <AccountForm 
            { ...props }
            username={value.username}
            membershipLevel={value.membershipLevel}
            updateAccount={value.updateAccount}
            email={value.email}
          />
        )}
      </AccountConsumer>
    )
  }  

export default ConnectedAccountForm;