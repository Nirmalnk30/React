import React from 'react';

const List = ({ people }) => {

    return(
        <div>
            {people.map((person) => {
                
                let {id, name, age, image} = person;
                return(

                    <article key={id} className= 'container'>
                    <div>

                       <img src={image} alt={name}/>

                      <h2>{name}</h2>
                        <p>{age} Years</p>
                        
                    </div>
                </article>
                    );

                })}
        </div>
    );
};

export default List;


