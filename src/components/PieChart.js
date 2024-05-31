import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ expenses }) => {
  const categories = ['Rent', 'Food', 'Utilities', 'Entertainment', 'Miscellaneous'];
  const categoryColors = ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#BADA55'];

  const calculateTotalByCategory = (category) => {
    return expenses
      .filter((expense) => expense.category === category)
      .reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map(category => calculateTotalByCategory(category)),
        backgroundColor: categoryColors,
        hoverBackgroundColor: categoryColors,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
