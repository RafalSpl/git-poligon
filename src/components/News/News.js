import React, {useState} from 'react';

import Author from '../components/Author/';
import Scoring from '../components/Scoring/';

const styles = {
    backgroundColor: 'lightgreen',
    border: '1px solid red',
    padding: 10
  };
  

function News({header, intro, author}) {
    const score = useState(5);
  
    return (
      <div style={styles}>
        <h2>{header}</h2>
        <p>{intro}</p>
        <Author author={author} />
        <Scoring score={score} />
      </div>
    )
  }

  export default News;