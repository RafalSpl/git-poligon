import React from 'react';

import News from '../components/News'

const data = [
  { id: 1,
    title: 'Pilne co to był za dzięń', 
    author: 'Jan Bobak',
    intro: 'intro 1 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
  },
  { id: 2,
    title: 'Wszyscy zazdszczą Polakom', 
    author: 'Jan Bobak',
    intro: 'intro 2 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
  },
  { id: 3,
    title: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ', 
    author: 'Jan Bobak',
    intro: 'intro 3 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
  },
]

function Articles() {
  return(
    <div>
      {data.map((elem, index) => (
      <News 
        key={`news-${elem.id}`} 
        header={elem.title} 
        intro={elem.intro} 
        author={elem.author}
      /> 
    ))}
    </div>
  )
};

export default Articles;