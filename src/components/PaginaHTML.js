import React, { useState } from 'react';
import './styles.css';
import Card from './Card';
import simuladorImage from './imgs/algorithm.jpg';
import moreAboutImage from './imgs/horspool.jpg';
import pdfImage from './imgs/pdf.png';
import hSistemas from './imgs/hsistemas.png';

const PaginaHTML = () => {
    const [activeSection, setActiveSection] = useState('home');

    const showSection = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div>
            <header>
                <img src={hSistemas} id="headerImage" alt="Header Logo" />
                <h1>Algoritmo Boyer Moore Horspool</h1>
            </header>
            <main>
                <section id="home" className={`content ${activeSection === 'home' ? 'active' : ''}`}>
                    <h2>Bienvenido a la Página Principal</h2>
                    <div className="card-container">
                        <Card
                            title="Simulador"
                            description="Ir al simulador del algoritmo"
                            image={simuladorImage}
                            onClick={() => showSection('simulator')}
                        />
                        <Card
                            title="Más Información"
                            description="Más información sobre el algoritmo"
                            image={moreAboutImage}
                            onClick={() => showSection('info')}
                        />
                        <Card
                            title="Complejidad (PDF)"
                            description="Ver el PDF sobre la complejidad"
                            image={pdfImage}
                            onClick={() => showSection('pdf')}
                        />
                    </div>
                </section>
                <section id="simulator" className={`content ${activeSection === 'simulator' ? 'active' : ''}`}>
                    <h2>Simulador del Algoritmo</h2>
                    <p>Aquí puedes interactuar con el simulador del algoritmo.</p>
                </section>
                <section id="info" className={`content ${activeSection === 'info' ? 'active' : ''}`}>
                    <h2>Más Información</h2>
                    <p>Aquí encontrarás más información sobre el algoritmo.</p>
                </section>
                <section id="pdf" className={`content ${activeSection === 'pdf' ? 'active' : ''}`}>
                    <h2>Complejidad (PDF)</h2>
                    <p>Aquí puedes ver el PDF sobre la complejidad del algoritmo.</p>
                </section>
            </main>
        </div>
    );
};

export default PaginaHTML;