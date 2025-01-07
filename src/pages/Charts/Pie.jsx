// PieChartComponent.js
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Function to render the pie chart
const PieChartComponent = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h4>Top Selling Items</h4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul>
        {data.map((item) => (
          <li key={item.name} style={{ listStyle: 'none' }}>
            {item.name}: {item.value} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieChartComponent;
