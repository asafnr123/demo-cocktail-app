import React from "react";
import "../styles/cocktails.css"
import { Link } from 'react-router-dom'


export function CocktailCard({ cocktail }) {






    return (
        <>
        <Link className="nav-link" to={`/cocktails/${cocktail.name}`}>
        <div className="card-container">
                
                <div className="img-container">
                    <img src={cocktail.img} alt={cocktail.name} />
                </div>

                <h3 >{cocktail.name}</h3>

                <div className="desc-container">
                    <p>{cocktail.description}</p>
                </div>

                <button className="learn-more">Learn More</button>
            </div>
        </Link>
            
        </>

    )


}





