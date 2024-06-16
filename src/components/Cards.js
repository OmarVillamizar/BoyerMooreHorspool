import React from 'react';
import simulator from './imgs/algorithm.jpg';
import info from './imgs/horspool.jpg';
import complexity from './imgs/pdf.png';

const cardsData = [
  {
    title: "Título 1",
    description: "Descripción 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imgSrc: simulator
  },
  {
    title: "Título 2",
    description: "Descripción 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imgSrc: info
  },
  {
    title: "Título 3",
    description: "Descripción 3: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imgSrc: complexity
  }
];

export default function Card() {
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
      <div className='row'>
        {cardsData.map((card, index) => (
          <div key={index} className='col-md-4'>
            <div className="card text-center bg-dark">
              <img src={card.imgSrc} alt={`Imagen de ${card.title}`} />
              <div className="card-body text-light">
                <h4 className="card-title">{card.title}</h4>
                <p className='card-text text-secondary'>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}