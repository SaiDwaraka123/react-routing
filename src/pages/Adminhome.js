import React from "react";
export default function Adminhome(){
      return (
     <div>
        <form action="addsong" method="post"> 
	<input type="submit" value="Add Song" style="background-color:orange ;"></input>	
</form>
<br></br>


<form action="viewsongs">
	<input type="submit" value="ViewSongs" style="background-color: orange;"></input>
</form>


<form action="createplaylists">
	<input type="submit" value="CREATE PLAYLISTS" style="background-color: orange;"></input>
	</form>
	<br></br>
	<form action="viewplaylists">
		<input type="submit" value="VIEW PLAYLISTS" style="background-color: orange;"></input>
	</form>
	
     </div>
      );
}