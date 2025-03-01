import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VRAdoptionChart = () => {
  // Years and adoption rate of VR in medical institutions
  const adoptionRateData = [
    { year: 2020, rate: 15 },
    { year: 2021, rate: 22 },
    { year: 2022, rate: 31 },
    { year: 2023, rate: 47 },
    { year: 2024, rate: 58 },
    { year: 2025, rate: 73 },
  ];
  
  return (
    <div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow">
      <h3 className="text-xl font-semibold text-gray-700">VR Adoption in Medical Education (2020-2025)</h3>
      <p className="text-gray-600">Estimated percentage of medical institutions using VR for training</p>
      <div className="h-64" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={adoptionRateData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 100]} label={{ value: 'Adoption Rate (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`${value}%`, 'Adoption Rate']} />
            <Legend />
            <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="sr-only">
        This line chart shows the increasing adoption rate of VR in medical education from 2020 to 2025.
        The data points are as follows:
        2020: 15% adoption rate
        2021: 22% adoption rate
        2022: 31% adoption rate
        2023: 47% adoption rate
        2024: 58% adoption rate
        2025: 73% adoption rate
        The chart shows a clear upward trend, with adoption accelerating particularly between 2022 and 2023.
        By 2025, nearly three-quarters of medical institutions are estimated to be using VR for training purposes.
      </div>
    </div>
  );
};

export default VRAdoptionChart;