import React from "react";
import Header from "..scss/Header.scss";

function Header() { 
return (
    <Header expand="lg" bg="light" variant="light">
        <div className="Logo">
        <h2>Movie App</h2> 
        </div>   
        <div className="pages">
            <ul>
                <li>Home</li>
                <li>Movies</li>
                <li>Favourites</li>
            </ul>
        </div> 
    </Header>
)};