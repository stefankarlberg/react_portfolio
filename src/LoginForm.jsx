import React from "react"
import './css/tailwind.css'
import './css/style.css'




  class LoginForm extends React.Component {
    constructor () {
      super();
      this.state = {name: '', password: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key) {
      return function (e) {
        var state = {};
        state[key] = e.target.value;
        this.setState(state);
      }.bind(this);
      
    }

    handleSubmit(event) {
      var data = {
          name: this.state.name,
          password: this.state.password,
      }

      if (this.state.name == "Test" && this.state.password =="Test") {

  
        alert('Hello ' + data.name + ', your message is: ' + data.password);
  
        }
        else {


                <div>
                  <LoginUser.Consumer>
                    {(context) => context.name}
                  </LoginUser.Consumer>
              </div>

        }

      event.preventDefault();
    }


    
    render () {
      return (

        <form onSubmit={this.handleSubmit}>
        <div className="flex-login">
            <div className="md:ml-auto md:mr-3 mb-3 md:text-right">
            <input className="landing_login_form" placeholder="Name" type="text" value={this.state.name} onChange={this.handleChange('name')} />
            </div>
            <div className="md:mr-auto md:ml-3 mb-3 md:text-left">
            <input className="landing_login_form" placeholder="Password" type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </div>
          </div>
        <div className="mr-auto mt-2 ml-auto text-center">
          <button className="login" type="submit" value="Submit">Log In</button>
        </div>  
      </form>


      );
    }
  }

  export default LoginForm




 
 