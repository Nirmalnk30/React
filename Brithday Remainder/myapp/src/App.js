import React, { useState } from 'react';
import Data from './Data';
import List from './List';



function App() {
  let [people, setPeople] = useState(Data);


    return(
           
      <main>
           <div>
           <h2>{people.length} Birthdays Today</h2>
           <List people= {people} />
           <button onClick={() => setPeople ([])}>Clear all</button>
           </div>
      </main>
    );
}

export default App;
