import React, { useState } from 'react';
import './cadastroP.css';

/* const CadastroProduto = () => {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [quantidadeAdquirida, setQuantidadeAdquirida] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nomeProduto') {
      setNomeProduto(value);
    } else if (name === 'quantidadeAdquirida') {
      setQuantidadeAdquirida(value);
    } else if (name === 'id') {
      setId(value);
    }
  };

  const handleCadastroProduto = () => {
    if (nomeProduto.trim() === '' || quantidadeAdquirida.trim() === '' || id.trim() === '') {
      return;
    }

    const novoProduto = {
      nomeProduto,
      quantidadeAdquirida,
      id,
    };

    setProdutos([...produtos, novoProduto]);
    setNomeProduto('');
    setQuantidadeAdquirida('');
    setId('');
  };

  return (
    <div className="container">
      <div className="cadastro">
        <h2>Cadastro de Produtos</h2>
        <div className="form-group">
          
          <input
            type="text"
            name="nomeProduto"
            value={nomeProduto}
            onChange={handleInputChange}
            placeholder="Digite o nome do produto"
          />
        </div>
        <div className="form-group">
         
          <input
            type="text"
            name="quantidadeAdquirida"
            value={quantidadeAdquirida}
            onChange={handleInputChange}
            placeholder="Digite a quantidade adquirida"
          />
        </div>
        <div className="form-group">
         
          <input
            type="text"
            name="id"
            value={id}
            onChange={handleInputChange}
            placeholder="Digite o ID"
          />
        </div>
        <div className="button-container">
          <button onClick={handleCadastroProduto}>Cadastrar</button>
        </div>
      </div>
      </div>
  );
};

export default CadastroProduto; */









/* function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleValueChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      name: name,
      quantity: quantity,
      value: value,
    };

    setProducts([...products, newProduct]);
    setName('');
    setQuantity(0);
    setValue(0);
  };

  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Quantidade:
          <input type="number" value={quantity} onChange={handleQuantityChange} />
        </label>
        <br />
        <label>
          Valor:
          <input type="number" value={value} onChange={handleValueChange} />
        </label>
        <br />
        <button type="submit">Adicionar</button>
      </form>
      <h2>Produtos cadastrados:</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - Quantidade: {product.quantity} - Valor: {product.value}
          </li>
        ))}
      </ul>
      <button onClick={() => console.log("Cadastrar")}>Cadastrar</button>
    </div>
  );
}

export default App;
 */



import axios from 'axios';
import { client } from '../../../service/http-common';


function App() {
  const [products, setProducts] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await client.post('/produto', {
      nomeProduto    })
  };


  return (
    <div className="container">
      <div className="cadastro">
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" value={nomeProduto} onChange={(e)=>setNomeProduto(e.target.value)} />
          </div>
          {/* <div className="form-group">
            <label>Quantidade:</label>
            <input type="number" value={qtdComprada} onChange={(e)=>setQtdComprada(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Valor Toal:</label>
            <input type="number" value={valorTotalItemC} onChange={(e)=>setValorToalItemC(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Valor Item:</label>
            <input type="number" value={precoProdC} onChange={(e)=>setPrecoProdC(e.target.value)} />
          </div> */}
          <div className="button-container">
            <button type="submit">Adicionar</button>
          </div>
        </form>
        <h2>Produtos cadastrados:</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.nomeProduto}
            </li>
          ))}
        </ul>
        <div className="button-container">
          <button onClick={handleSubmit }>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
