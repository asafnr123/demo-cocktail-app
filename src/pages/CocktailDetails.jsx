import React from 'react';
import { useParams } from 'react-router-dom'
import { getCocktail } from "../services/cocktailServices"
import "../styles/cocktails.css"





export function CocktailDetails() {

    const routerParams = useParams();
    const { name } = routerParams;
    // const data = getData();

    const localCocktails = [
        {
            Name: "Whisky Sour",
            Recipie: {
                "Lime Juice": 20,
                "Simple Syrup": 20,
                "Whisky": 60
            },
            "Garnish": "Slice of lime",
            "description": "Caramel and vanilla from the whiskey, with a sour factor coming from the of lime juice",
            "img": "https://images.unsplash.com/photo-1624528200979-38165e9a969c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },

        {
            Name: "Margarita",
            Recipie: {
                "Lime Juice": 30,
                "Orange Liqueur": 30,
                "Simple Syrup": 15,
                "Tequila": 60
            },
            "Garnish": "Salt for rimming the glass",
            "description": "A Margarita is said to have all five main tasting notes: sweet, sour, salty, bitter and umami.",
            "img": "https://selfproclaimedfoodie.com/wp-content/uploads/margarita-recipe-card-1.jpg"
        },

        {
            Name: "Blue Laggon",
            Recipie: {
                "Blue Corasau": 20,
                "Lemonade": 90,
                "Lime Juice": 15,
                "Vodka": 60
            },
            "Garnish": "Slice of orange",
            "description": "The orange liqueur and lemonade add a sweet and tart citrus element that is nice and refreshing",
            "img": "https://www.acouplecooks.com/wp-content/uploads/2021/03/Blue-Lagoon-Cocktail-007s.jpg"
        },

        {
            Name: "Sex On The beach",
            Recipie: {
                "Cranberies": 60,
                "Lime Juice": 15,
                "Peach Liquor": 30,
                "Simple Syrup": 30,
                "Vodka": 60
            },
            "Garnish": "Slice of orange and cherry",
            "description": "Fruity with just enough tartness to keep it from being too sweet. The alcohol flavor isn't very noticeable.",
            "img": "https://www.lemontreedwelling.com/wp-content/uploads/2020/04/sex-on-the-beach-featured-720x720.jpg"
        }
    ]



    if (!name) return <div>lodaing...</div>




    return (

        <>
            <h2>{name}</h2>


            <div className='cocktail-detail-container'>

                <div>
                    
                </div>
            </div>


        </>
    )


}