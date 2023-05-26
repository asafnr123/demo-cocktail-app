import React from 'react';
import { CocktailCard } from '../components/CocktailCard';
import "../styles/cocktails.css"
import { getData } from '../services/cocktailServices';

export function Cocktails() {

    const cocktails = getData();

    // return cocktails.map((c, i) => {
    //     return (
    //         <div className='cocktails-container'>
    //             <CocktailCard  className='cocktail-item' cocktail={c} key={i} />
    //         </div>
    //     )
    // })

    return (
        <div className='cocktail-container'>
            {
                cocktails.map((c, index) => {
                    return (
                        <CocktailCard key={index} className='cocktail-item' cocktail={c} />
                    )
                })
            }

        </div>

    )
}