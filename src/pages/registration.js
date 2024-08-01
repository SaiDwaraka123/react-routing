import React from "react";

export default function Registration() {
    return (
          <div>
             
            <h2>Registration form</h2>   
		<form action="register" method="post"> <br></br>                          
	
	    <label>Userid:</label>
		<input type="text" name="userid" /><br></br>
		
		
		
		<label>Name:</label><br></br>
            <input type="text" name="name"/>
			<br></br>
			
		 <label >Email:</label><br></br>
		 <input type="email"  name="email"/><br></br>
		 
		 
		 <label for="password">Password:</label><br></br>
		     <input type="password" id="password" name="password"/><br></br>
		   
		  <label>Gender</label>
		Male<input type="radio"  name="gender" value="male" />
		 Female<input type="radio" name="gender" value="female"/>
		      <br></br>
		   
		   <label >Role</label>
		Admin<input type="radio"  value="admin"  name="role"/>
		
	Customer<input type="radio" value="customer" name="role"/>
			
				<br></br>
				<label>Address</label>
	          <textarea name="address"></textarea>
		
		<br></br>
		<input type="submit" value="Submit"/>
		
        
       </form> 

    </div>
    );

}