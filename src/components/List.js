import React from 'react';

const List = ({ expenses }) => {
  const categories = ['Rent', 'Food', 'Utilities', 'Entertainment', 'Miscellaneous'];

  const calculateTotalByCategory = (category) => {
    let total = 0;
    expenses.map((expense) => {
      if (expense.category === category) {
        total += parseFloat(expense.amount);
      }
    });
    return total;
  };
  

  const calculateRequiredIncome = (rentTotal) => {
    return (rentTotal / 0.33).toFixed(2);
  };
  const rentTotal = calculateTotalByCategory('Rent');  
  const requiredIncome=calculateRequiredIncome(rentTotal)

  return (
    <div>
      {categories.map((category) => {
        const total = calculateTotalByCategory(category);
        return (
          <div key={category} className="expense-category">
            <h2>{category}</h2>
            <ul>
              {expenses
                .filter((expense) => expense.category === category)
                .map((expense, index) => (
                  <li key={index}>
                    {expense.name}: ${expense.amount}
                  </li>
                ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        );
      })}
      <div className="required-income">
        <h2>Required Monthly Income: ${requiredIncome}</h2>
      </div>
    </div>
  );
};

export default List;
