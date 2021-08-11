import React, { useEffect, useState } from 'react';
import Table from './Table';
import AppContext from './AppContext';
import NumericFilter from './NumericFilter';
import './App.css';

function App() {
  const [data, setData] = useState(undefined);
  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => res.json())
      .then((result) => {
        setData(result.results);
      });
  }, []);

  function addFilter(numericFilter) {
    setFilterByNumericValues([...filterByNumericValues, numericFilter]);
  }

  return (
    <AppContext.Provider
      value={ {
        data,
        filters: {
          filterByName: { name: filterByName },
          filterByNumericValues,
        },
      } }
    >
      <input
        type="text"
        data-testid="name-filter"
        value={ filterByName }
        onChange={ (event) => setFilterByName(event.currentTarget.value) }
      />
      <NumericFilter onSubmit={ addFilter } />
      <Table />
    </AppContext.Provider>
  );
}

export default App;
