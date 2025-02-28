"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const FeaturesBento = () => {
  const [robotStyles, setRobotStyles] = useState({
    height: '250px',
    transform: 'scale(1.0) translateY(0)',
  });

  useEffect(() => {
    const updateRobotStyles = () => {
      if (window.innerWidth < 640) {
        setRobotStyles({ height: '250px', transform: 'scale(1.0) translateY(0)' });
      } else {
        setRobotStyles({ height: '400px', transform: 'scale(1.0) translateY(-0%)' });
      }
    };

    updateRobotStyles();
    window.addEventListener('resize', updateRobotStyles);
    return () => window.removeEventListener('resize', updateRobotStyles);
  }, []);

  return (
    <div
      className="max-w-[800px] w-full h-auto sm:h-[400px] relative overflow-hidden mx-auto rounded-lg border
        border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300
        dark:border-gray-700 dark:shadow-[0_10px_20px_rgba(255,255,255,0.10),_0_6px_6px_rgba(255,255,255,0.05)] 
        dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15),_0_10px_10px_rgba(255,255,255,0.10)]
        animate-border"
    >
      <div className="flex flex-col sm:flex-row h-full">
        {/* Texto */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 relative z-10 flex flex-col justify-center text-left">
          <h1
            className="text-xl sm:text-3xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-b from-white to-black dark:from-gray-200 dark:to-gray-500 text-center"
          >
            3D Interativo
          </h1>
          <p className="mt-2 sm:mt-4 text-gray-500 dark:text-gray-400 max-w-xs sm:max-w-lg">
            Que tal elevar a experiência do usuário com um design 3D impressionante? <br />
            Dê vida à sua IU com incríveis cenas tridimensionais!
          </p>
        </div>
        {/* Robô */}
        <div className="flex-1 flex items-center justify-center relative">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <span className="loader">Carregando...</span>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              style={{
                display: 'block',
                width: '100%',
                ...robotStyles,
              }}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBento;