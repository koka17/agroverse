import { Sprout, Satellite, TrendingUp } from 'lucide-react';

interface WelcomeScreenProps {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Sprout className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            AgroVerse
          </h1>
          <p className="text-2xl text-blue-200 font-light">
            NASA-Powered Sustainable Farming
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
          <p className="text-lg text-white/90 leading-relaxed mb-6">
            Experience the future of agriculture powered by real NASA satellite data.
            Learn how space technology helps farmers make smarter, more sustainable decisions
            about their crops and resources.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <Satellite className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Real NASA Data</h3>
              <p className="text-blue-200 text-sm">
                Soil moisture from SMAP, rainfall from GPM, and vegetation indices
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-green-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Interactive Farm</h3>
              <p className="text-blue-200 text-sm">
                Plant, water, and harvest crops while learning sustainable practices
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-white font-semibold mb-2">Data Insights</h3>
              <p className="text-blue-200 text-sm">
                Visualize trends and understand environmental impact on farming
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
        >
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}
