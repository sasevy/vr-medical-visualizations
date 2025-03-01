import React from 'react';
import './App.css';
import EmergencyResponseChart from './components/EmergencyResponseChart';
import EmpathyScoresChart from './components/EmpathyScoresChart';
import ComplianceRatesChart from './components/ComplianceRatesChart';
import VRAdoptionChart from './components/VRAdoptionChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VR in Medical Training: Key Statistics</h1>
        <p>Interactive visualizations of the impact of Virtual Reality on medical training.</p>
      </header>
      <main className="chart-grid">
        <section className="chart-item">
          <EmergencyResponseChart />
        </section>
        <section className="chart-item">
          <EmpathyScoresChart />
        </section>
        <section className="chart-item">
          <ComplianceRatesChart />
        </section>
        <section className="chart-item">
          <VRAdoptionChart />
        </section>
      </main>
      <footer>
        <p>Data visualizations for VR Medical Training article</p>
      </footer>
    </div>
  );
}

export default App;