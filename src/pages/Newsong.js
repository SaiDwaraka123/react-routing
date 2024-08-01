import React from "react";

export default function Newsong(){
    return(
        <div>
          <form action="addsong" method="post">     
		
        <label> Song Name</label>
        <input type="text" name="name"/>
        <br>
        </br>
        <label>Song Artist</label>
        <input type="text" name="artist"/>
        <br>
        </br>
        <label>Song Genre</label><br></br>
        <input type="text" name="genre"/>
        <br>
        </br>			
       <label>Song Link</label>
        <input type="text" name="link"/>
        <br>
        </br>
        
        <input type="submit" value="Add Song" style="background-color: orange;"/>
        
    </form>
        </div>
    );
}