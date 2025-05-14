import React, { useState, useEffect } from 'react';
import { ConfettiEffect } from './ConfettiEffect';
import { CongratulationMessage } from './CongratulationMessage';
import { FloatingElements } from './FloatingElements';

export const CelebrationPage: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiBurst, setConfettiBurst] = useState(false);
  const [count, setCount] = useState(-1);
  const [celebrationStarted, setCelebrationStarted] = useState(false);
  
  // Countdown effect
  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (count === 0) {
      setConfettiBurst(true);
      setTimeout(() => setConfettiBurst(false), 8000);
      setCount(-1);
    }
  }, [count]);

  // Handle start celebration
  const startCelebration = () => {
    setCelebrationStarted(true);
    setShowConfetti(true);
    setCount(3);
    setTimeout(() => setShowConfetti(false), 10000);
  };

  // Handle manual confetti trigger
  const triggerConfetti = () => {
    setConfettiBurst(true);
    setTimeout(() => setConfettiBurst(false), 5000);
  };

  return (
    <div className="relative">
      {/* Confetti effect */}
      {(showConfetti || confettiBurst) && <ConfettiEffect run={showConfetti || confettiBurst} />}
      
      {/* Main content */}
      <main className="relative z-10 px-4 py-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Floating elements in background */}
        <FloatingElements />
        
        {/* Start button or congratulations message */}
        {!celebrationStarted ? (
          <div className="min-h-screen flex items-center justify-center">
            <button
              onClick={startCelebration}
              className="shine-effect bg-gradient-to-r from-gold to-amber-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 text-xl"
            >
              Pindutin moko beybe ✨
            </button>
          </div>
        ) : (
          <>
            {/* Congratulations message */}
            <div className="min-h-screen flex flex-col items-center justify-center">
              <CongratulationMessage />
              
              {/* Celebration button */}
              <div className="flex flex-col items-center justify-center my-12">
                {count >= 0 ? (
                  <div className="text-center">
                    <h3 className="text-navy text-2xl font-serif mb-4">Celebration in...</h3>
                    <p className="text-6xl font-bold text-burgundy mb-2 animate-pulse-slow">
                      {count > 0 ? count : "🎉"}
                    </p>
                    <p className="text-gray-600 mt-2">Wait for it...</p>
                  </div>
                ) : (
                  <button
                    onClick={triggerConfetti}
                    className="shine-effect bg-gradient-to-r from-gold to-amber-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
                  >
                    Woohoooo 🎉
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </main>
      
      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 text-sm">
        <p>Made with ❤️ para sa espesyal mong araw</p>
      </footer>
    </div>
  );
};