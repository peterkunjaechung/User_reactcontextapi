import React from "react";
import { Card, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

const Account = () => (
    <AccountConsumer>
      { value => (
        <Card>
          <Card.Content>
            <Card.Header>{ value.username }</Card.Header>
            <Card.Meta>
              Email: { value.email }
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <p>Avatar: { value.membershipLevel }</p>
          </Card.Content>
        </Card>
      )}
    </AccountConsumer>
  )
  
  export default Account;