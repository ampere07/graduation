import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

interface ConfettiEffectProps {
  run: boolean;
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ run }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [confettiProps, setConfettiProps] = useState({
    recycle: false,
    numberOfPieces: 800,
    gravity: 0.3
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Adjust confetti properties after initial burst
    if (run) {
      // For the initial burst, use a lot of confetti
      setConfettiProps({
        recycle: false,
        numberOfPieces: 800,
        gravity: 0.3
      });
      
      // After 2 seconds, reduce the amount for better performance
      const timer = setTimeout(() => {
        setConfettiProps({
          recycle: false,
          numberOfPieces: 200,
          gravity: 0.5
        });
      }, 2000);
      
      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', handleResize);
      };
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [run]);

  if (!run) return null;

  return (
    <div className="confetti-container">
      <ReactConfetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        colors={['#FFD700', '#1E3A8A', '#800020', '#FFFDD0', '#F472B6', '#9333EA']}
        recycle={confettiProps.recycle}
        numberOfPieces={confettiProps.numberOfPieces}
        gravity={confettiProps.gravity}
      />
    </div>
  );
};