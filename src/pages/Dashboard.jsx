import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#2E4B73', '#95B7E5', '#D9D9D9', '#EDF3FA'];

function Dashboard() {
  const [data, setData] = useState({
    total_sales: '0',
    total_expenses: '0',
    net_profit: '0',
    due_amount: '0',
    payment_received: '0',
    supplier_records: [],
    customer_records: [],
    top_selling_products: [],
    supplier_payments: []
  });
  const [selectedEndpoint, setSelectedEndpoint] = useState('0');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${selectedEndpoint}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [selectedEndpoint]);

  const StatCard = ({ title, value, bgColor = 'bg-blue-50' }) => (
    <div className={`${bgColor} rounded-2xl p-4`}>
      <p className="text-gray-600 text-sm mb-2">{title}</p>
      <div className="flex items-center gap-2">
        <span className="text-2xl font-semibold">${value}</span>
      </div>
    </div>
  );

  const formatMonthlyData = () => {
    const monthlyData = [];
    data.supplier_records.forEach((supplier, index) => {
      monthlyData.push({
        month: supplier.month,
        supplier: supplier.bags,
        customer: data.customer_records[index]?.bags || 0
      });
    });
    return monthlyData;
  };

  const formatTopSelling = () => 
    data.top_selling_products.map(item => ({
      name: item.item,
      value: item.weight
    }));

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Overview</h1>
        <select 
          className="border rounded-md px-3 py-1"
          value={selectedEndpoint}
          onChange={(e) => setSelectedEndpoint(e.target.value)}
        >
          {[0, 1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>Date {num + 1}</option>
          ))}
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <StatCard title="Total Sales" value={data.total_sales} bgColor="bg-blue-50" />
        <StatCard title="Total Expenses" value={data.total_expenses} bgColor="bg-gray-100" />
        <StatCard title="Net Profit" value={data.net_profit} bgColor="bg-blue-50" />
        <StatCard title="Due Amount" value={data.due_amount} bgColor="bg-gray-100" />
        <StatCard title="Payment Received" value={data.payment_received} bgColor="bg-blue-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl p-6">
          <h2 className="font-semibold mb-6">Bags</h2>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={formatMonthlyData()}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 'auto']}
                />
                <Tooltip />
                <Line 
                  type="monotone"
                  dataKey="supplier"
                  stroke="#2E4B73"
                  strokeWidth={2}
                  dot={false}
                  name="Supplier Records"
                />
                <Line 
                  type="monotone"
                  dataKey="customer"
                  stroke="#95B7E5"
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  dot={false}
                  name="Customer Records"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-8 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              <span className="text-sm">Supplier Records</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <span className="text-sm">Customer Records</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="font-semibold mb-6">Top selling items</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={formatTopSelling()}
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {formatTopSelling().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-3">
            {formatTopSelling().map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm">{item.value} kg</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6">
        <h2 className="font-semibold mb-6">Recent Supplier Payments</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="text-left pb-4">Record No</th>
                <th className="text-left pb-4">Farmer Name</th>
                <th className="text-left pb-4">Net Amount</th>
                <th className="text-left pb-4">Paid Amount</th>
                <th className="text-left pb-4">Due Amount</th>
                <th className="text-left pb-4">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {data.supplier_payments.map((payment) => (
                <tr key={payment.record_no} className="text-sm">
                  <td className="py-2">{payment.record_no}</td>
                  <td className="py-2">{payment.farmer_name}</td>
                  <td className="py-2">${payment.net_amount}</td>
                  <td className="py-2">${payment.paid_amount}</td>
                  <td className="py-2">${payment.due_amount}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      payment.payment_status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {payment.payment_status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;