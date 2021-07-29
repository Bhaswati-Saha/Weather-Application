import React from 'react';
import './form_component.css';
/*mx means left right margin and my is top bottom margin*/
const Form=({loadWeather,err})=>{
	return(
		<div className="container">
		   <div>{err?error():null}</div>
		  <form onSubmit={loadWeather}>
		  <div className="row">
		   <div className="col-md-3">
		     <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
		   </div>
		   <div className="col-md-3">
		     <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"/>
		   </div>
		   <div className="col-md-3">
		     <button style={{fontSize:"x-large", color:"white"}}className="btn btn-warning">Get Weather</button>
		   </div>
		  </div>
		  </form>
		</div>
		);
}

function error(){
	return(
		<div className="alert alert-danger mx-5" role="alert">
		    Please Enter City and Country
		</div>
		);
}

export default Form;