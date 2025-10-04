import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, Droplets, Cloud, Leaf } from 'lucide-react';
import nasaData from '../data/nasaData.json';

interface AnalyticsScreenProps {
  onNext: () => void;
}

export default function AnalyticsScreen({ onNext }: AnalyticsScreenProps) {
  const chartData = nasaData.soil_moisture.map((_, index) => ({
    day: `Day ${index + 1}`,
    soilMoisture: (nasaData.soil_moisture[index] * 100).toFixed(1),
    rainfall: nasaData.rainfall[index],
    vegetation: (nasaData.vegetation_index[index] * 100).toFixed(1)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Data Analytics</h1>
          <p className="text-blue-200 text-lg">7-Day trend analysis from NASA satellites</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Avg Soil Moisture</p>
                <p className="text-2xl font-bold text-white">46.4%</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-300 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+8.2% from last week</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center">
                <Cloud className="w-6 h-6 text-sky-300" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Avg Rainfall</p>
                <p className="text-2xl font-bold text-white">11.4 mm</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-300 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+12.1% from last week</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-300" />
              </div>
              <div>
                <p className="text-blue-200 text-sm">Avg Vegetation</p>
                <p className="text-2xl font-bold text-white">76.7%</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-300 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+5.4% from last week</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-6">
          <h2 className="text-2xl font-bold text-white mb-6">Soil Moisture Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorSoil" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis dataKey="day" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #334155',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area
                type="monotone"
                dataKey="soilMoisture"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorSoil)"
                name="Soil Moisture (%)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Rainfall Patterns</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="day" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="rainfall"
                  stroke="#0ea5e9"
                  strokeWidth={3}
                  dot={{ fill: '#0ea5e9', r: 5 }}
                  name="Rainfall (mm)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Vegetation Health</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="day" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="vegetation"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 5 }}
                  name="Vegetation Index (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-xl"
        >
          Continue to Educational Resources
        </button>
      </div>
    </div>
  );
}
