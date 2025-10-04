import { useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import EducationScreen from './screens/EducationScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <WelcomeScreen onNext={() => setCurrentScreen(1)} />,
    <DashboardScreen onNext={() => setCurrentScreen(2)} />,
    <AnalyticsScreen onNext={() => setCurrentScreen(3)} />,
    <EducationScreen onNext={() => setCurrentScreen(0)} />
  ];

  return screens[currentScreen];
}

export default App;
