import React from 'react';
import { useParams } from 'react-router-dom'
import { getData, getCocktail } from "../services/cocktailServices"





export function CocktailDetails() {

    const routerParams = useParams();
    const { name } = routerParams;
    const data = getData();





    if (!data) return <div>lodaing...</div>
    
    var cocktail = getCocktail(name, data);
    console.log(cocktail);


    return (

        <h2>{cocktail.name}</h2>

      
    
    )


}