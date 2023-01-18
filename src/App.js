
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Example from './componentes/Example';
import Definition from './componentes/Definition';
import SynOrAnt from './componentes/SynOrAnt';

function App() {

  const [data, setData] = useState('');
  const [search, setSearch] = useState('');
  const [type, setType] = useState('')

  const handleClick = (newType) => {
    setType(newType);
  }

  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

  const updateSearch = (event) => {
    if(event.key = 'Enter')
    {axios.get(url + search).then((response) => {
      setData(response.data[0])
    })}


  }

  return (
    <div className="App">      
      <div className="centered">
        <h1 className='title'>Diccionario en inglés</h1>
          <input
            type="text"
            id="name" 
            required="required"
            className='search-input'
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            placeholder='Escribe una palabra en inglés'
          />
          <button
          onClick={updateSearch}
          >Buscar</button>
      {data &&
        <div className='definitions'>
          <h1>Palabra: <span>{data.word.toUpperCase()}</span></h1>
          <h1>Fonética: {data.phonetic}</h1>
          <button
            onClick={(e) => { handleClick('def') }}
          >
            Definición
          </button>
          <button
            onClick={(e) => { handleClick('syn') }}
          >
            Sinónimo
          </button>
          <button
            onClick={(e) => { handleClick('ant') }}
          >
            Antónimo
          </button>
          <button
            onClick={(e) => { handleClick('ex') }}
          >
            Ejemplos
          </button>
        </div>}

      {type === 'def' && <div className='container'><h1>Definiciones:</h1> <Definition data={data.meanings} /></div>} 
      {type === 'syn' && <div className='container'><h1>Sinonimos:</h1> <SynOrAnt data={data.meanings[0].synonyms} /></div>} 
      {type === 'ant' && <div className='container'><h1>Antonimos:</h1> <SynOrAnt data={data.meanings[0].antonyms} /></div>} 
      {type === 'ex' && <div className='container'><h1>Ejemplos:</h1> <Example data={data.meanings} type='example' /></div>}
    </div>
    </div>

  );
}

export default App;
