import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import PieChart from './components/PieChart';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setShowForm(false);
  };

  return (
    <div className="App">
      <h1>Budget Calculator</h1>
      <div>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Show Expense List' : 'Add Expense'}
        </button>
      </div>
      {showForm ? (
        <div>
          <Form addExpense={addExpense} />
        </div>
      ) : (
        <div className="expense-section">
          <List expenses={expenses} />
          <div className="pie-chart-container">
            <PieChart expenses={expenses} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
