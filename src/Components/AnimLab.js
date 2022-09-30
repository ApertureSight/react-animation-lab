import React, {useState, useEffect} from "react";
import { CSSTransition } from "react-transition-group";


export default function AnimLab(){
    const [cards, setCards] = useState([]);


//on mount
    useEffect (() => {
    let suits = ["H","D","C","S"];

    let genCards = suits.flatMap((suit) => {
        return [2,3,4,5,6,7,8,9,10].map((val) =>{
            return suit + val;
        });
    });
    setCards(genCards);
    }, []);

    //render stuff
    let cardEls = cards.map((card, ind) => 
    {
        let delay = ind * 100;

        return(
            <CSSTransition
            key= {card.val}
            appear ={true}
            in={card.active}
            timeout={{enter: delay, exit: 400}}
            classNames="card"
            >
                <div
                className="card"
                style ={{transitionDelay: `${delay}ms`}}
                onclick ={() => {
                    cards[ind].active= false;
                    setCards([...cards]);
                }}
                >
                    {card.val}
                </div>
            </CSSTransition>
        
        
        );
    });

    return(
    <div>
        <div className="cardStack">{cardEls}</div>
    </div>
    );

}