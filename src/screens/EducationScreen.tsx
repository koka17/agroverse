import { Satellite, Globe, BookOpen, Sprout } from 'lucide-react';

interface EducationScreenProps {
  onNext: () => void;
}

export default function EducationScreen({ onNext }: EducationScreenProps) {
  const missions = [
    {
      icon: Satellite,
      name: 'SMAP',
      fullName: 'Soil Moisture Active Passive',
      description: 'Measures the amount of water in the top 5 cm of soil globally. This data helps farmers optimize irrigation schedules and conserve water.',
      color: 'from-blue-500 to-cyan-600',
      launched: '2015'
    },
    {
      icon: Globe,
      name: 'GPM',
      fullName: 'Global Precipitation Measurement',
      description: 'Provides real-time rainfall data worldwide every 3 hours. Essential for drought monitoring and flood prediction in agricultural regions.',
      color: 'from-sky-500 to-blue-600',
      launched: '2014'
    },
    {
      icon: Sprout,
      name: 'Landsat',
      fullName: 'Land Remote Sensing Satellite',
      description: 'Captures vegetation indices (NDVI) to monitor crop health, growth stages, and detect stress before visible to the human eye.',
      color: 'from-green-500 to-emerald-600',
      launched: '1972'
    },
    {
      icon: BookOpen,
      name: 'MODIS',
      fullName: 'Moderate Resolution Imaging Spectroradiometer',
      description: 'Monitors land surface temperature and vegetation dynamics. Helps predict growing seasons and identify optimal planting times.',
      color: 'from-orange-500 to-red-600',
      launched: '1999'
    }
  ];

  const benefits = [
    {
      title: 'Water Conservation',
      description: 'Precise soil moisture data reduces water waste by up to 30%, ensuring crops get exactly what they need.',
      impact: '30% water savings'
    },
    {
      title: 'Yield Optimization',
      description: 'Real-time vegetation monitoring helps farmers identify and address crop stress early, improving yields by 15-20%.',
      impact: '+20% productivity'
    },
    {
      title: 'Climate Resilience',
      description: 'Rainfall predictions and temperature data enable farmers to adapt planting schedules to changing climate patterns.',
      impact: 'Better adaptation'
    },
    {
      title: 'Sustainable Practices',
      description: 'Data-driven decisions reduce fertilizer runoff and optimize resource use, protecting ecosystems.',
      impact: 'Lower environmental impact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">How NASA Helps Farmers</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Space technology is revolutionizing agriculture. Learn how satellites orbiting Earth
            provide critical data for sustainable farming.
          </p>
        </header>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 mb-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">NASA Earth Science Missions</h2>
          <p className="text-blue-100 text-lg mb-8">
            Multiple satellites work together to provide comprehensive environmental data,
            enabling farmers worldwide to make informed decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {missions.map((mission) => {
              const Icon = mission.icon;
              return (
                <div key={mission.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${mission.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{mission.name}</h3>
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">
                          {mission.launched}
                        </span>
                      </div>
                      <p className="text-sm text-blue-100 mb-2">{mission.fullName}</p>
                      <p className="text-white/90 text-sm">{mission.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Real-World Impact on Agriculture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {benefit.impact}
                  </span>
                </div>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 text-white shadow-2xl mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Globe className="w-9 h-9" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Global Impact</h2>
              <p className="text-green-100">Data freely available to farmers worldwide</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-4xl font-bold mb-1">193</div>
              <div className="text-green-100 text-sm">Countries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-4xl font-bold mb-1">500M+</div>
              <div className="text-green-100 text-sm">Farmers Reached</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-4xl font-bold mb-1">24/7</div>
              <div className="text-green-100 text-sm">Data Coverage</div>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-slate-800 to-slate-900 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-slate-900 hover:to-black transition-all duration-200 shadow-lg"
        >
          Back to Welcome
        </button>
      </div>
    </div>
  );
}

