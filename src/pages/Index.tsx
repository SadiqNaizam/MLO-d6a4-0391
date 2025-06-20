import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import CardContainer from '@/components/Login/CardContainer';

/**
 * LoginPage component
 * 
 * This is the main page component for the login screen.
 * It utilizes `MainAppLayout` for the overall page structure (centering content and displaying a global logo)
 * and `CardContainer` to display the actual login form and related content within a card.
 *
 * As per project requirements:
 * - Project Info: Target page is "Login".
 * - Component Hierarchy: This page corresponds to "LoginPage", which uses "CenteredLayout" (fulfilled by MainAppLayout)
 *   and features "CardContainer".
 * - Layout Requirements: The overall full-screen centered layout is handled by `MainAppLayout`,
 *   and the card's specific styling is within `CardContainer`.
 */
const LoginPage: React.FC = () => {
  // The `showGlobalLogo` prop is set to `true` for `MainAppLayout` to display
  // the "InsideBox" logo in the top-left corner, as seen in the provided image.
  // `CardContainer` is passed as children to `MainAppLayout`, which will center it on the page.
  return (
    <MainAppLayout showGlobalLogo={true}>
      <CardContainer />
    </MainAppLayout>
  );
};

export default LoginPage;
