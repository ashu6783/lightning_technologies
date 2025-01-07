// LineChartComponent.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Function to render the line chart
const LineChartComponent = ({ data, dateRange }) => {
  return (
    <div style={{ flex: 2, padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h4>Bags ({dateRange.charAt(0).toUpperCase() + dateRange.slice(1)})</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="supplier" stroke="#8884d8" />
          <Line type="monotone" dataKey="customer" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
