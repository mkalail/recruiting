// Central theme configuration for consistent styling across the application
export const theme = {
  colors: {
    primary: {
      // Matching Tailwind mint colors for consistency
      light: '#5eead4', // Light mint - use for subtle backgrounds
      DEFAULT: '#2dd4bf', // Main mint - primary actions and emphasis
      dark: '#14b8a6', // Dark mint - hover states and strong emphasis
    },
    text: {
      primary: '#171717', // Main text color - high contrast
      secondary: '#404040', // Secondary text - less emphasis
      light: '#737373', // Subtle text - lowest emphasis
    }
  }
} as const;