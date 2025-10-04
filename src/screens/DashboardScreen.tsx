import { useState } from 'react';
import { Droplets, Cloud, Leaf, Thermometer, Wind, Info, Sprout } from 'lucide-react';
import nasaData from '../data/nasaData.json';

interface DashboardScreenProps {
  onNext: () => void;
}

export default function DashboardScreen({ onNext }: DashboardScreenProps) {
  const [farmStatus, setFarmStatus] = useState('Your farm is ready for action');
  const [fieldColor, setFieldColor] = useState('from-amber-700 to-yellow-800');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const handleWater = () => {
    setFarmStatus('Crops watered! Soil moisture improved.');
    setFieldColor('from-green-600 to-emerald-700');
    setTimeout(() => setFarmStatus('Your farm is healthy'), 2000);
  };

  const handlePlant = () => {
    setFarmStatus('Seeds planted! Watch them grow with proper care.');
    setFieldColor('from-lime-600 to-green-700');
    setTimeout(() => setFarmStatus('Your farm is healthy'), 2000);
  };

  const handleHarvest = () => {
    setFarmStatus('Harvest complete! Great yield this season.');
    setFieldColor('from-amber-600 to-orange-700');
    setTimeout(() => setFarmStatus('Ready to plant again'), 2000);
  };

  const dataCards = [
    {
      id: 'soil',
      icon: Droplets,
      label: 'Soil Moisture',
      value: `${(nasaData.current.soil_moisture * 100).toFixed(0)}%`,
      color: 'from-blue-500 to-cyan-600',
      tooltip: 'Measured by NASA\'s SMAP satellite. Monitors water content in soil to optimize irrigation.'
    },
    {
      id: 'rain',
      icon: Cloud,
      label: 'Rainfall',
      value: `${nasaData.current.rainfall} mm`,
      color: 'from-sky-500 to-blue-600',
      tooltip: 'Data from NASA\'s GPM mission. Tracks precipitation patterns globally.'
    },
    {
      id: 'veg',
      icon: Leaf,
      label: 'Vegetation Index',
      value: nasaData.current.vegetation_index.toFixed(2),
      color: 'from-green-500 to-emerald-600',
      tooltip: 'NDVI from NASA satellites. Indicates crop health and photosynthetic activity.'
    },
    {
      id: 'temp',
      icon: Thermometer,
      label: 'Temperature',
      value: `${nasaData.current.temperature}°C`,
      color: 'from-orange-500 to-red-600',
      tooltip: 'Surface temperature data helps predict growing conditions.'
    },
    {
      id: 'humidity',
      icon: Wind,
      label: 'Humidity',
      value: `${nasaData.current.humidity}%`,
      color: 'from-teal-500 to-cyan-600',
      tooltip: 'Atmospheric moisture levels affect crop disease and growth.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Farm Dashboard</h1>
          <p className="text-slate-600 text-lg">Real-time NASA satellite data for your farm</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Virtual Farm</h2>

              <div className={`w-full h-64 bg-gradient-to-br ${fieldColor} rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 shadow-inner`}>
                <div className="text-center">
                  <Leaf className="w-16 h-16 text-white/80 mx-auto mb-2" />
                  <p className="text-white font-semibold text-lg">Farm Field</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <p className="text-slate-700 text-center font-medium">{farmStatus}</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={handleWater}
                  className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  <Droplets className="w-5 h-5 mx-auto mb-1" />
                  Water Crops
                </button>
                <button
                  onClick={handlePlant}
                  className="bg-gradient-to-br from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  <Leaf className="w-5 h-5 mx-auto mb-1" />
                  Plant Seeds
                </button>
                <button
                  onClick={handleHarvest}
                  className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  <Sprout className="w-5 h-5 mx-auto mb-1" />
                  Harvest
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 mb-4">NASA Data Feed</h2>
              <div className="space-y-3">
                {dataCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.id}
                      className="relative bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors"
                      onMouseEnter={() => setShowTooltip(card.id)}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 font-medium">{card.label}</p>
                            <p className="text-lg font-bold text-slate-900">{card.value}</p>
                          </div>
                        </div>
                        <Info className="w-4 h-4 text-slate-400" />
                      </div>

                      {showTooltip === card.id && (
                        <div className="absolute z-10 left-0 right-0 top-full mt-2 bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl">
                          {card.tooltip}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-slate-900 hover:to-black transition-all duration-200 shadow-lg"
        >
          Continue to Data Analytics
        </button>
      </div>
    </div>
  );
}

