import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { GraduationCap } from 'lucide-react';

export const CongratulationMessage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  const mainTextProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0px)' : 'translateY(30px)' },
    delay: 300,
    config: { tension: 280, friction: 20 }
  });

  const detailsProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0px)' : 'translateY(20px)' },
    delay: 800,
    config: { tension: 280, friction: 20 }
  });

  const iconProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'scale(1)' : 'scale(0.5)' },
    delay: 500,
    config: { tension: 200, friction: 12 }
  });

  return (
    <div className="text-center py-12 max-w-3xl mx-auto">
      <animated.div style={iconProps} className="mb-4 flex justify-center">
        <div className="p-4 rounded-full bg-navy inline-block">
          <GraduationCap size={48} className="text-gold" />
        </div>
      </animated.div>
      
      <animated.h1 
        style={mainTextProps} 
        className="text-4xl md:text-6xl font-serif font-black mb-4 text-navy"
      >
        Congratulations, <span className="text-gradient">My Baby!</span>
      </animated.h1>
      
      <animated.div style={detailsProps}>
        <h2 className="text-xl md:text-2xl font-serif text-burgundy mb-6">
          Graduation mo na
        </h2>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          unang una at di sa huli congrats baby sa Achievement mo ngayon mag patuloy kalang mabuhay
          hanggat gusto mo andito lang ako palagi iloveyouuuu
        </p>
        
        <p className="text-lg text-navy font-medium">
          PROUD NA PROUD AKO SAYO!
        </p>
      </animated.div>
    </div>
  );
};