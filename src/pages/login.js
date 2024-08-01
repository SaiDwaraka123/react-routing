import React from "react";

export default function Login() {
    return <div>
        <form action="validate" method="post"/>
			<h2>USER LOGIN:</h2>
			
			<label >Email:</label><br></br>
			 <input type="email"  name="email" /><br>
			 </br>
					 
			<label >Password:</label><br/>
			<input type="password" name="password"/><br>	
			</br>
			
				
			<input type="submit" value="LOGIN" />
			
    </div>
}