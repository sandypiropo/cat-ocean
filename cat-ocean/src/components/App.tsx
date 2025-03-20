import { useState, useRef, useEffect } from 'react';
import gatinhoChorando from '../assets/gatinhochorando.png';
import musica from '../assets/catlose-to-you.mp3';
import gatinhoNormal from '../assets/gatinho.png';
import '../styles/App.css';

const App = () => {
    const [imagemGato, setImagemGato] = useState(gatinhoNormal);
    const audioRef = useRef(new Audio(musica));

    const tocarSom = () => {
        setImagemGato(gatinhoChorando);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const pararSom = () => {
        setImagemGato(gatinhoNormal);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    useEffect(() => {
        audioRef.current.onended = () => setImagemGato(gatinhoNormal);

    },[]);

    return (
        <div className='gato'>
            <img
                src={imagemGato} 
                alt="gatinho ocean" 
                width={300} 
                className='imagemgato'
                onMouseEnter={pararSom}
                onMouseLeave={tocarSom}
            
            />
        </div>
    );
};

export default App;
