
import { useState, useRef, useEffect } from 'react';
import gatinhoChorando from '../assets/gatinhochorando.png';
import musica from '../assets/catlose-to-you.mp3';
import gatinhoNormal from '../assets/gatinho.png';
import '../styles/App.css';

const App = () => {
    const [background, setBackground] = useState('#ffffff');
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
        <div className='container' style={{ backgroundColor: background }}>
            <div className='theme-selector'>
            <div className='theme-box orange' onClick={() => setBackground('#f37424')}></div>
            <div className='theme-box white' onClick={() => setBackground('#ffffff')}></div>
            <div className='theme-box pink' onClick={() => setBackground('#ffc0cb')}></div>
            <div className='theme-box green' onClick={() => setBackground('#0b490bd7')}></div>
        </div>
        
            <div className='gato'>
                <img
                    src={imagemGato}
                    alt="gatinho ocean"
                    className='imagemgato'
                    onMouseEnter={pararSom}
                    onMouseLeave={tocarSom} 
                />
            </div>
        </div>
    );
};

export default App;
