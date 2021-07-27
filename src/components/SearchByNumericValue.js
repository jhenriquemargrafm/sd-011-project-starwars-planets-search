import React, { useContext, useState } from 'react';
import TableContext from '../context/TableContext';

function SearchByNumericValue() {
  const { addFilterOnList } = useContext(TableContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const columnNames = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  return (
    <div className="search-container">
      <label htmlFor="column-filter">
        Categoria:
        <select
          id="column-filter"
          data-testid="column-filter"
          onChange={ (event) => setColumn(event.target.value) }
          value={ column }
          name="column"
        >
          {columnNames.map((item, index) => <option key={ index }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Faixa de valor:
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={ (event) => setComparison(event.target.value) }
          value={ comparison }
          name="comparison"
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        Valor:
        <input
          id="value-filter"
          data-testid="value-filter"
          type="number"
          onChange={ (event) => setValue(event.target.value) }
          value={ value }
          name="value"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilterOnList(column, comparison, value) }
      >
        Adicionar Filtro
      </button>
    </div>
  );
}

export default SearchByNumericValue;
