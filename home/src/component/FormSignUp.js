import React, { Component } from "react";

class FormSignUp extends Component {
  render() {
    return (
      <div className='FormSignUp'>
      <div id='head'>
        <h3>Not quite ready?</h3>
        <div className='info'>Get information on past detals and investment tips</div>
      </div>
        <form>
         <div className="form-group">
           <label >Name</label>
          <input type="text" className="form-control" placeholder="abc@gmail.com"/>
           </div>
         <div className="form-group">
            <label >Email</label>
           <input type="text" className="form-control" placeholder="abc@gmail.com"/>
          </div>
        </form>
        <button type="button" className="btn btn-secondary btn-lg" id='buttonOpacity'>Keep me updated!</button>
      </div>
    );
  }
  
}

export default FormSignUp;
