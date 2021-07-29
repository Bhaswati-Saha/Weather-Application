import React from 'react';

/*display-1 is for increasing the size of the icon
pt-4 means padding top*/
 const Weather=({city,country,celsius,max_temp,min_temp,description,icon})=>{
 	return(
 		<div className="container text-light">
 		    <div className="cards pt-4">
               <h1>{city}</h1>
               <h5 className="pv4">
                  <i className={`wi ${icon} display-1`} />
               </h5>
               {celsius?(<h1 className="pv2">{celsius}&deg;</h1>):null}
               {minmaxTemp(min_temp,max_temp)}
               <h2 className="pv3">{description}</h2>
 		    </div>
        </div>
 		); 
 };
 const minmaxTemp=(min,max)=>
 {
 	if(min && max)
 	{
 	return(
 		<h1>
 		   <span className="ph4">{min}&deg;</span>
 		   <span className="ph4">{max}&deg;</span>
 		</h1>

 		);
 	}
 };

 export default Weather;