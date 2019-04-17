import React from "react"
import './css/tailwind.css'
import './css/style.css'


class Formular extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
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
        <div class="flex mr-12 mb-6">
            <div class="w-1/5">
               <label class="block text-black font-bold md:text-left mb-1 md:mb-0 pr-4" for="inline-full-name">Page Name </label>
            </div>
            <div class="w-4/5">
               <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" type="text" value={this.state.value} onChange={this.handleChange} />
           </div>
        </div>
       
        <button classNAME = "formular" type="submit" value="Submit">Skicka</button>
  </form>

      );
    }
  }
  
  export default Formular