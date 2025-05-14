import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookText, Award, Briefcase } from 'lucide-react';

export const Milestone: React.FC = () => {
  // Function to check if element is in viewport
  const useInView = (elementRef: React.RefObject<HTMLElement>, threshold = 0.1) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        },
        { threshold }
      );
      
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [elementRef, threshold]);
  };
  
  const milestones = [
    {
      title: "The Academic Journey",
      description: "From late-night study sessions to challenging exams, every moment of hard work has led to this achievement.",
      icon: BookText,
      color: "bg-navy",
    },
    {
      title: "Graduation Day",
      description: "Today marks a special milestone in your life. A moment to celebrate all you've accomplished and the bright future ahead.",
      icon: Award,
      color: "bg-burgundy",
    },
    {
      title: "The Future Awaits",
      description: "As one chapter closes, another begins. The skills and knowledge you've gained will guide you toward success.",
      icon: Briefcase,
      color: "bg-gold",
    },
  ];
  
  const milestoneRefs = [
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ];
  
  milestoneRefs.forEach(ref => useInView(ref));
  
  return (
    <section className="py-12 mt-8">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-12">
        Celebrating Your Journey
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {milestones.map((milestone, index) => (
          <div 
            key={index}
            ref={milestoneRefs[index]}
            className="reveal-animation bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mt-12 -mr-12 opacity-10 ${milestone.color}`}></div>
            
            <div className={`${milestone.color} text-white p-3 rounded-full inline-block mb-4`}>
              <milestone.icon size={24} />
            </div>
            
            <h3 className="text-xl font-serif font-bold text-navy mb-3">
              {milestone.title}
            </h3>
            
            <p className="text-gray-600">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16 reveal-animation" ref={React.createRef<HTMLDivElement>()}>
        <blockquote className="font-serif text-xl md:text-2xl italic text-gray-700 max-w-4xl mx-auto px-6">
          "Education is not the filling of a pail, but the lighting of a fire."
          <footer className="mt-2 text-base text-gray-500">- William Butler Yeats</footer>
        </blockquote>
      </div>
    </section>
  );
};