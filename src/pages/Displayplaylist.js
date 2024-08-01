import React from "react";

export default function Displayplaylist(){
    return (
        <div>
            <table border="1">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr th:each="play : ${playlist}">
                <td th:text="${play.id}"></td>
                <td>
                    <ul>
                        <li th:each="son : ${play.song}">
                            <span th:text="${son.name}"></span>
                            <audio controls>
                                <source th:src="${son.link}" />
                            </audio>
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
        </div>
    )
}