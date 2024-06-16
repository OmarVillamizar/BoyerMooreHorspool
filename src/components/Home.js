import React from 'react'
import Cards from './Cards';
import hImage from './imgs/hsistemas.png'
import './style.css';

export default function Home() {
  return (
    <div>
        <header class="bg-home">
                <img src={hImage} id="headerImage" alt="Header Logo" />
                <h1 id="headerTitle">Algoritmo Boyer Moore Horspool</h1>
        </header>
        <main>
            <Cards/> 
        </main>
    </div>
  )
}
