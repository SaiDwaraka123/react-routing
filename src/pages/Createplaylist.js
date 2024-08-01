import React from "react";

export default function createplaylist() {
    return (
        <div>
            <form action="addplaylist" method="post">
        <label>Playlist Name:</label>
        <input type="text" name="name"/>
        
        <div th:each="song : ${songs}">
            <input type="checkbox" th:name="songs" th:value="${song.id}"/>
            <label th:text="${song.name}"></label>
        </div>
        
        <input type="submit" value="ADD PLAYLIST" style="background-color: orange;"/>
    </form>
        </div>
    )
    
}