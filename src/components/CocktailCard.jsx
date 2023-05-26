import React from "react";
import "../styles/cocktails.css"
import { Link } from 'react-router-dom'


export function CocktailCard({ cocktail }) {






    return (
        <>
        
        <div className="card-container">
                
                <div className="img-container">
                    <img src={cocktail.img} alt={cocktail.Name} />
                </div>

                <h3 className="name" >{cocktail.Name}</h3>

                <div className="desc-container">
                    <p>{cocktail.description}</p>
                </div>

                <Link className="nav-link" to={`/cocktails/${cocktail.Name}`}>
                <button className="learn-more">Learn More</button>
                </Link>
            </div>
        
            
        </>

    )


}





