import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';


function App() {

  const times = [
    {
      nome: 'Engenharia',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    }, 
    {
      nome: 'Infraestrutura',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }, 
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Produto',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }, 
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)};
    
    </div>
  );
};

export default App;
