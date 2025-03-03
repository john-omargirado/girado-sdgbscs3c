
import React from 'react';
import { Pledge } from '@/data/pledges';
import { cn } from '@/lib/utils';
import { 
  Activity, Wheat, HeartPulse, BookOpen, Users, Droplets, Zap, 
  Briefcase, Factory, Equal, Building, Recycle, Cloud, Fish,
  Trees, Scale, Handshake
} from 'lucide-react';

interface PledgeCardProps {
  pledge: Pledge;
  index: number;
  onClick: () => void;
}

const PledgeCard: React.FC<PledgeCardProps> = ({ pledge, index, onClick }) => {
  const iconMap = {
    'activity': Activity,
    'wheat': Wheat,
    'heart-pulse': HeartPulse,
    'book-open': BookOpen,
    'users': Users,
    'droplets': Droplets,
    'zap': Zap,
    'briefcase': Briefcase,
    'factory': Factory,
    'equal': Equal,
    'building': Building,
    'recycle': Recycle,
    'cloud': Cloud,
    'fish': Fish,
    'trees': Trees,
    'scale': Scale,
    'handshake': Handshake
  };

  const IconComponent = iconMap[pledge.icon as keyof typeof iconMap];
  
  const colorClasses = {
    'sdg-1': 'from-[#E5243B]/10 to-[#E5243B]/5 border-[#E5243B]/20 hover:border-[#E5243B]/40',
    'sdg-2': 'from-[#DDA63A]/10 to-[#DDA63A]/5 border-[#DDA63A]/20 hover:border-[#DDA63A]/40',
    'sdg-3': 'from-[#4C9F38]/10 to-[#4C9F38]/5 border-[#4C9F38]/20 hover:border-[#4C9F38]/40',
    'sdg-4': 'from-[#C5192D]/10 to-[#C5192D]/5 border-[#C5192D]/20 hover:border-[#C5192D]/40',
    'sdg-5': 'from-[#FF3A21]/10 to-[#FF3A21]/5 border-[#FF3A21]/20 hover:border-[#FF3A21]/40',
    'sdg-6': 'from-[#26BDE2]/10 to-[#26BDE2]/5 border-[#26BDE2]/20 hover:border-[#26BDE2]/40',
    'sdg-7': 'from-[#FCC30B]/10 to-[#FCC30B]/5 border-[#FCC30B]/20 hover:border-[#FCC30B]/40',
    'sdg-8': 'from-[#A21942]/10 to-[#A21942]/5 border-[#A21942]/20 hover:border-[#A21942]/40',
    'sdg-9': 'from-[#FD6925]/10 to-[#FD6925]/5 border-[#FD6925]/20 hover:border-[#FD6925]/40',
    'sdg-10': 'from-[#DD1367]/10 to-[#DD1367]/5 border-[#DD1367]/20 hover:border-[#DD1367]/40',
    'sdg-11': 'from-[#FD9D24]/10 to-[#FD9D24]/5 border-[#FD9D24]/20 hover:border-[#FD9D24]/40',
    'sdg-12': 'from-[#BF8B2E]/10 to-[#BF8B2E]/5 border-[#BF8B2E]/20 hover:border-[#BF8B2E]/40',
    'sdg-13': 'from-[#3F7E44]/10 to-[#3F7E44]/5 border-[#3F7E44]/20 hover:border-[#3F7E44]/40',
    'sdg-14': 'from-[#0A97D9]/10 to-[#0A97D9]/5 border-[#0A97D9]/20 hover:border-[#0A97D9]/40',
    'sdg-15': 'from-[#56C02B]/10 to-[#56C02B]/5 border-[#56C02B]/20 hover:border-[#56C02B]/40',
    'sdg-16': 'from-[#00689D]/10 to-[#00689D]/5 border-[#00689D]/20 hover:border-[#00689D]/40',
    'sdg-17': 'from-[#19486A]/10 to-[#19486A]/5 border-[#19486A]/20 hover:border-[#19486A]/40'
  };

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
        "pledge-card rounded-xl p-6 border bg-gradient-to-b backdrop-blur-sm",
        "transition-all duration-300 cursor-pointer",
        colorClasses[pledge.color as keyof typeof colorClasses],
        "animate-fade-in",
        { "animation-delay-[200ms]": index % 3 === 1 },
        { "animation-delay-[400ms]": index % 3 === 2 }
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${iconColors[pledge.color as keyof typeof iconColors]}20` }}
        >
          {IconComponent && (
            <IconComponent
              size={24}
              color={iconColors[pledge.color as keyof typeof iconColors]}
            />
          )}
        </div>
        <span 
          className="text-sm font-medium rounded-full px-3 py-1"
          style={{ 
            backgroundColor: `${iconColors[pledge.color as keyof typeof iconColors]}15`,
            color: iconColors[pledge.color as keyof typeof iconColors]
          }}
        >
          Goal {pledge.id}
        </span>
      </div>

      <h3 className="text-xl font-display font-semibold mb-2">{pledge.title}</h3>
      
      <p className="text-sm text-muted-foreground mb-4">
        {pledge.shortDescription}
      </p>
      
      <div className="flex justify-between items-center">
        <span 
          className="text-xs font-medium"
          style={{ color: iconColors[pledge.color as keyof typeof iconColors] }}
        >
          View details
        </span>
        <span 
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: `${iconColors[pledge.color as keyof typeof iconColors]}15`,
          }}
        >
          →
        </span>
      </div>
    </div>
  );
};

export default PledgeCard;
