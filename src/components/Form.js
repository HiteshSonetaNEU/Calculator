import React, { useState } from 'react';
import MuiAlert from "@material-ui/lab/Alert";

const Form = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [alert,setAlert]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && category) {
      addExpense({ name, amount, category });
      setName('');
      setAmount('');
      setCategory('');
    }
    else{
      setAlert(true)
    }
  };

  return (<>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Rent">Rent</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <button type="submit">Add Expense</button>
    </form>
    {alert &&     
    <MuiAlert severity="error" onClick={() => setAlert(!alert)}>Please fill all the fields</MuiAlert>    
    }
    </>
  );
};

export default Form;
