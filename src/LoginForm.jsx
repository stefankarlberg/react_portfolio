import React from "react"
import './css/tailwind.css'
import './css/style.css'


class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.state = {value2: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div className="flex-login">
            <div className="md:ml-auto md:mr-3 mb-3 md:text-right">
            <input className="landing_login_form" placeholder="Username" type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className="md:mr-auto md:ml-3 mb-3 md:text-left">
               <input className="landing_login_form" placeholder="Password" type="text" value={this.state.value2} onChange={this.handleChange} />
           </div>
        </div>
        <div className="mr-auto mt-6 ml-auto text-center">
           <button classNAME = "login" type="submit" value="Submit">Log In</button>
        </div>
       
        
  </form>

      );
    }
  }
  
  export default LoginForm