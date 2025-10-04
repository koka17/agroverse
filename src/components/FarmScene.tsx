import { useState, useEffect } from 'react';
import { Sun, CloudRain } from 'lucide-react';

type GrowthStage = 'empty' | 'seed' | 'sprout' | 'growing' | 'mature';

interface FarmSceneProps {
  stage: GrowthStage;
  isWatering: boolean;
}

export default function FarmScene({ stage, isWatering }: FarmSceneProps) {
  const [cloudPosition, setCloudPosition] = useState(0);
  const [sunRotation, setSunRotation] = useState(0);

  useEffect(() => {
    const cloudInterval = setInterval(() => {
      setCloudPosition(prev => (prev + 1) % 120);
    }, 100);

    const sunInterval = setInterval(() => {
      setSunRotation(prev => (prev + 1) % 360);
    }, 50);

    return () => {
      clearInterval(cloudInterval);
      clearInterval(sunInterval);
    };
  }, []);

  const renderCrops = () => {
    const crops = [];
    for (let i = 0; i < 8; i++) {
      crops.push(
        <div key={i} className="flex flex-col items-center" style={{ animationDelay: `${i * 0.15}s` }}>
          {renderCropStage(stage, i)}
        </div>
      );
    }
    return crops;
  };

  const renderCropStage = (currentStage: GrowthStage, index: number) => {
    switch (currentStage) {
      case 'empty':
        return (
          <div className="w-8 h-12 flex items-end justify-center">
            <div className="w-6 h-1 bg-amber-800 rounded-full"></div>
          </div>
        );
      case 'seed':
        return (
          <div className="w-8 h-12 flex items-end justify-center animate-bounce">
            <div className="w-2 h-2 bg-amber-900 rounded-full mb-1"></div>
          </div>
        );
      case 'sprout':
        return (
          <div className="w-8 h-12 flex items-end justify-center">
            <div className="animate-grow-sprout">
              <div className="w-1 h-6 bg-green-600 rounded-t-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        );
      case 'growing':
        return (
          <div className="w-8 h-16 flex items-end justify-center animate-sway" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="relative">
              <div className="w-2 h-12 bg-gradient-to-t from-green-700 to-green-500 rounded-t-lg"></div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="absolute -left-2 top-1 w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute -right-2 top-1 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case 'mature':
        return (
          <div className="w-10 h-20 flex items-end justify-center animate-sway" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="relative">
              <div className="w-2 h-16 bg-gradient-to-t from-green-800 via-green-600 to-green-500 rounded-t-lg"></div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="w-6 h-6 bg-yellow-400 rounded-lg"></div>
                <div className="absolute -left-3 top-2 w-5 h-5 bg-yellow-400 rounded-lg"></div>
                <div className="absolute -right-3 top-2 w-5 h-5 bg-yellow-400 rounded-lg"></div>
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-4 h-4 bg-yellow-500 rounded-lg"></div>
              </div>
              <div className="absolute top-4 -left-3 w-5 h-3 bg-green-500 rounded-full rotate-45"></div>
              <div className="absolute top-4 -right-3 w-5 h-3 bg-green-500 rounded-full -rotate-45"></div>
              <div className="absolute top-8 -left-2 w-4 h-2 bg-green-400 rounded-full rotate-12"></div>
              <div className="absolute top-8 -right-2 w-4 h-2 bg-green-400 rounded-full -rotate-12"></div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-200 rounded-2xl overflow-hidden shadow-inner">
      <div className="absolute inset-0">
        <div
          className="absolute top-6 right-8 transition-transform duration-1000"
          style={{ transform: `rotate(${sunRotation}deg)` }}
        >
          <Sun className="w-16 h-16 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-yellow-300 opacity-30 blur-xl animate-pulse"></div>
        </div>

        <div
          className="absolute top-12"
          style={{ left: `${cloudPosition}%`, transition: 'left 0.1s linear' }}
        >
          <div className="relative">
            <div className="w-12 h-6 bg-white rounded-full opacity-80"></div>
            <div className="absolute top-2 left-3 w-8 h-5 bg-white rounded-full opacity-80"></div>
            <div className="absolute top-1 left-6 w-10 h-6 bg-white rounded-full opacity-80"></div>
          </div>
        </div>

        <div
          className="absolute top-8"
          style={{ left: `${(cloudPosition + 60) % 120}%`, transition: 'left 0.1s linear' }}
        >
          <div className="relative">
            <div className="w-10 h-5 bg-white rounded-full opacity-70"></div>
            <div className="absolute top-1 left-2 w-7 h-4 bg-white rounded-full opacity-70"></div>
            <div className="absolute top-2 left-5 w-8 h-5 bg-white rounded-full opacity-70"></div>
          </div>
        </div>
      </div>

      {isWatering && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2">
            <CloudRain className="w-20 h-20 text-blue-400 animate-bounce" />
          </div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-rain"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 30}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            >
              <div className="w-1 h-3 bg-blue-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-amber-800 to-amber-900">
        <div className="absolute top-0 left-0 right-0 h-1 bg-green-700"></div>

        <div className="absolute top-4 left-0 right-0 px-8">
          <div className="grid grid-cols-8 gap-3 items-end justify-items-center">
            {renderCrops()}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-900 to-stone-900 opacity-50"></div>
      </div>

      <div className="absolute bottom-32 left-4 w-12 h-16 bg-amber-700 rounded-t-lg">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-8 bg-red-800 rounded-t-full"></div>
        <div className="w-6 h-8 bg-amber-900 mt-4 mx-auto rounded"></div>
      </div>

      {stage === 'mature' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sparkle"
              style={{
                left: `${Math.cos((i * Math.PI) / 3) * 40}px`,
                top: `${Math.sin((i * Math.PI) / 3) * 40}px`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
