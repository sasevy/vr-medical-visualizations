import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const EmergencyResponseChart = () => {
  // Data for impact of VR on emergency response
  const emergencyResponseData = [
    { name: 'Before VR Training', value: 100 },
    { name: 'After VR Training', value: 57 },
  ];
  
  // Colors for chart
  const redGreenColors = ['#FF8042', '#00C49F'];
  
  return (
    <div className="chart-container">
      <h3 className="chart-title">Impact on Emergency Response</h3>
      <p className="chart-description">43% reduction in incident-related downtime after implementing VR training</p>
      <div className="chart-wrapper" aria-hidden="true">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={emergencyResponseData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} label={{ value: 'Relative Incident Downtime (%)', position: 'insideBottom', offset: -5 }} />
            <YAxis dataKey="name" type="category" />
            <Tooltip formatter={(value) => [`${value}%`, 'Incident Downtime']} />
            <Bar dataKey="value" fill="#8884d8">
              {emergencyResponseData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={redGreenColors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="sr-only">
        This chart compares incident-related downtime before and after implementing VR training. 
        Before VR training, the incident-related downtime is shown as 100% (the baseline).
        After VR training, the incident-related downtime decreased to 57%, representing a 43% reduction.
        The before measurement is shown in orange, and the after measurement is shown in green, visually highlighting the improvement.
      </div>
    </div>
  );
};

export default EmergencyResponseChart;