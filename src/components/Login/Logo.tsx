import React from 'react';
import { Hexagon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ className, iconClassName, textClassName }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <Hexagon className={cn("h-7 w-7 text-primary", iconClassName)} />
      <span className={cn("ml-2 text-xl font-semibold text-foreground", textClassName)}>
        InsideBox
      </span>
    </div>
  );
};

export default Logo;
