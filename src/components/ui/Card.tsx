import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#1a1a1a] rounded-xl p-6 shadow-xl hover:shadow-[#00ff95]/10 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;