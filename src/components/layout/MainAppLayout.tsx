import React from 'react';
import { cn } from '@/lib/utils';
import Logo from '../Login/Logo'; // Using the Logo component from the Login feature area

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  /** 
   * Controls the visibility of the global logo, typically shown in the top-left.
   * Defaults to true, matching the visual context of the login page image.
   */
  showGlobalLogo?: boolean;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  className,
  showGlobalLogo = true,
}) => {
  return (
    <div
      className={cn(
        // This implements the "overall" layout requirements for the login page context:
        // full screen, flex column, items centered, content justified center, and background color.
        "flex min-h-screen w-screen flex-col items-center justify-center bg-background",
        className
      )}
    >
      {showGlobalLogo && (
        // The global logo is positioned absolutely to not interfere with the centering of children.
        // Styling matches the provided image for the login page.
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
          <Logo />
        </div>
      )}
      {/* Children passed to MainAppLayout (e.g., CenteredLayout -> CardContainer for LoginPage) 
          will be centered on the page due to the parent div's flex properties. */}
      {children}
    </div>
  );
};

export default MainAppLayout;
