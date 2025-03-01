import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ComplianceRatesChart = () => {
  // Data for compliance rates
  const complianceRatesData = [
    { name: 'Traditional Lectures', value: 100 },
    { name: 'Gamified VR Training', value: 140 },
  ];
  
  // Colors for chart
  const colors = ['#8884d8', '#00C49F'];
  
  return (
    <div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold text-gray-700">Safety Protocol Compliance</h3>
      <p className="text-gray-600">40% higher compliance rates with safety protocols using gamified VR training</p>
      <div className="h-64" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={complianceRatesData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 150]} label={{ value: 'Relative Compliance Rate (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`${value}%`, 'Compliance Rate']} />
            <Bar dataKey="value" fill="#8884d8">
              {complianceRatesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="sr-only">
        This chart compares safety protocol compliance rates between traditional lectures and gamified VR training.
        Traditional lectures serve as the baseline at 100%.
        Gamified VR training shows a compliance rate of 140%, representing a 40% increase over traditional lectures.
        The traditional lectures bar is shown in purple, while the gamified VR training bar is shown in green to highlight the improvement in safety protocol adherence.
      </div>
    </div>
  );
};

export default ComplianceRatesChart;