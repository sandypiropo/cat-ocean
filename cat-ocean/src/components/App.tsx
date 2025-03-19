import gatinho from '../assets/gatinho.jpg';
import '../styles/App.css'
const App = () => {
    return (
        <div className='gato'>
            <img src={gatinho} alt="gatinho ocean" width={300} className='imagemgato'/>
            <div className='buttom1'>
                <button>
                    MEOW
                </button>
            </div>
        </div>
    )
};

export default App;