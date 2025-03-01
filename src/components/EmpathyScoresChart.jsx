import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const EmpathyScoresChart = () => {
  // Data for empathy scores comparison
  const empathyScoreData = [
    { name: 'Traditional Role-Playing', value: 100 },
    { name: 'VR-Based Training', value: 132 },
  ];
  
  // Colors for chart
  const colors = ['#8884d8', '#00C49F'];
  
  return (
    <div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold text-gray-700">Improvement in Empathy Scores</h3>
      <p className="text-gray-600">32% increase in empathy scores with VR-based communication training</p>
      <div className="h-64" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={empathyScoreData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 140]} label={{ value: 'Relative Empathy Score (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`${value}%`, 'Empathy Score']} />
            <Bar dataKey="value" fill="#8884d8">
              {empathyScoreData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="sr-only">
        This chart compares empathy scores between traditional role-playing methods and VR-based training.
        Traditional role-playing is shown as the baseline at 100%.
        VR-based training shows an empathy score of 132%, representing a 32% increase over traditional methods.
        The traditional method bar is shown in purple, while the VR-based training bar is shown in green to highlight the improvement.
      </div>
    </div>
  );
};

export default EmpathyScoresChart;