import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart2({ expenses }) {
  // Step 1: Filter only expenses (amount < 0)
  const expenseItems = expenses.filter((item) => item.amount);

  // Step 2: Group by text and sum the amounts
  const grouped = {};
  expenseItems.forEach((item) => {
    const key = item.text.toLowerCase();
    if (grouped[key]) {
      grouped[key].amount += Math.abs(item.amount);
    } else {
      grouped[key] = {
        label: item.text,
        amount: Math.abs(item.amount),
      };
    }
  });

  const labels = Object.values(grouped).map((item) => item.label);
  const dataValues = Object.values(grouped).map((item) => item.amount);

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: labels.map(
          (_, i) => `hsl(${(i * 137.5) % 360}, 70%, 60%)`
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-chart-section">
      <h2>Expense Breakdown (Grouped)</h2>
      {dataValues.length > 0 ? (
        <Pie data={data} />
      ) : (
        <p style={{ color: "gray" }}>No expenses to show.</p>
      )}
    </div>
  );
}

export default PieChart2;
