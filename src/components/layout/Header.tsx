import React from 'react';
import { cn } from '@/lib/utils';
import Logo from '../Login/Logo'; // Using the Logo component from the Login feature area as specified in context

interface HeaderProps {
  children?: React.ReactNode; // For navigation items or other header content
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <header className={cn("w-full border-b bg-card text-card-foreground", className)}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* The Logo component is provided in the context and can be reused here */}
        <Logo />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {children}
          {/* 
            As an example, if no children are passed, you could render default navigation links:
            !children && (
              <>
                <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Dashboard</a>
                <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Settings</a>
              </>
            )
          */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
