import React from "react"
import { Panel, Form, FormGroup, FormControl, Button } from react-bootstrap

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // send it to the login page

    function render(){
        <Form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          Password:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    }
}