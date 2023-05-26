import React from 'react';
import '../styles/style.css';
import {BiDrink, BiTrophy, BiSmile} from 'react-icons/bi'
import {Link} from 'react-router-dom'


export function Home() {
    return (
        <>
            <div className="intro">
                <h2>My Cocktail</h2>
                <p>Pick your favorite cocktail</p>
                <Link to={'/cocktails'}><button >Learn More</button></Link>
                
            </div>

            <div className="usages m-4">
                <div className="usage">
                    <BiTrophy size={40}/>
                    <p className="usage-heading">Learn New Skills</p>
                    <p className="usage-text">Making cocktails is a skill that anybody can learn at home. And everyone needs that friend who knows how to make great cocktails</p>
                </div>
                <div className="usage">
                    <BiDrink size={40}/>
                    <p className="usage-heading">Personal Taste</p>
                    <p className="usage-text">One of the best things about making cocktails at home is that you can customize them to your personal taste.</p>
                </div>
                <div className="usage">
                    <BiSmile size={40}/>
                    <p className="usage-heading">Have Fun</p>
                    <p className="usage-text">Making cocktails at home is a fun and creative outlet. You can experiment with different flavors, try out new techniques, and create your own unique recipes.</p>
                </div>
            </div>
        </>
    )
}