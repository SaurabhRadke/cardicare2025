import React, { useState } from 'react';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';

export default function ServiceCard ({ title, description, questions }){
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-rose-50 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Heart className="text-rose-500 w-6 h-6" />
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-rose-500 hover:text-rose-600 p-1 rounded-full hover:bg-rose-100"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        {isExpanded && (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800 mb-2">Frequently Asked Questions</h4>
            {questions.map((qa, index) => (
              <div key={index} className="bg-rose-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800 mb-2">{qa.question}</p>
                <p className="text-gray-600">{qa.answer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};