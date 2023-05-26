import { useEffect, useState } from "react";


export function getData() {

    var cocktailsUrl = "https://localhost:44327/api/Cocktail";
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(cocktailsUrl)
        .then(res => res.json())
        .then(d => setData(d))
    },[]);
    
    
    return data;


}



export function getCocktail(name, cocktails) {

    let cocktail = cocktails.find(c => c.name === name)

    if(cocktail) return cocktail;
    else return false;

    

}