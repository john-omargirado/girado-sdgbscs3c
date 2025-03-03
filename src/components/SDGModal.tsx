
import React, { useEffect, useRef } from 'react';
import { Pledge } from '@/data/pledges';
import { X, ChevronRight, Target, Clock, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SDGModalProps {
  pledge: Pledge | null;
  isOpen: boolean;
  onClose: () => void;
}

const SDGModal: React.FC<SDGModalProps> = ({ pledge, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!pledge) return null;

  const iconColors = {
    'sdg-1': '#E5243B',
    'sdg-2': '#DDA63A',
    'sdg-3': '#4C9F38',
    'sdg-4': '#C5192D',
    'sdg-5': '#FF3A21',
    'sdg-6': '#26BDE2',
    'sdg-7': '#FCC30B',
    'sdg-8': '#A21942',
    'sdg-9': '#FD6925',
    'sdg-10': '#DD1367',
    'sdg-11': '#FD9D24',
    'sdg-12': '#BF8B2E',
    'sdg-13': '#3F7E44',
    'sdg-14': '#0A97D9',
    'sdg-15': '#56C02B',
    'sdg-16': '#00689D',
    'sdg-17': '#19486A'
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        ref={modalRef}
        className={cn(
          "bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden transition-transform duration-300",
          isOpen ? "scale-100" : "scale-95"
        )}
      >
        <div className="relative">
          <div 
            className="h-24 w-full"
            style={{ backgroundColor: iconColors[pledge.color as keyof typeof iconColors] }}
          />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Close modal"
          >
            <X size={16} color="white" />
          </button>

          <div className="px-8 pb-8 -mt-12">
            <div 
              className="w-24 h-24 rounded-xl flex items-center justify-center mb-4 shadow-sm"
              style={{ backgroundColor: iconColors[pledge.color as keyof typeof iconColors] }}
            >
              <span className="text-3xl font-display font-bold text-white">{pledge.id}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-semibold mb-2">{pledge.title}</h2>
            
            <p className="text-muted-foreground mb-8">
              {pledge.longDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Target size={18} />
                  <h3 className="font-medium">Goals</h3>
                </div>
                <ul className="space-y-2">
                  {pledge.goals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <LineChart size={18} />
                  <h3 className="font-medium">Expected Impact</h3>
                </div>
                <p className="text-sm">{pledge.impact}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={18} />
                  <h3 className="font-medium">Timeline</h3>
                </div>
                <p className="text-sm">{pledge.timeline}</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDGModal;
