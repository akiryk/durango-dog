export const baseStyles =
  'btn inline-flex items-center justify-center font-opensans font-semibold text-center rounded-[4px] tracking-[0.015em] whitespace-nowrap ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2';

export const variantStyles = {
  primary: 'btn-primary bg-charcoal border border-white/25',
  secondary: 'btn-secondary bg-pale-tan border border-white/25',
  highlight: 'btn-highlight bg-yellow border border-white/25',
} as const;

export const sizeStyles = {
  small: 'text-[16px] py-[6px] px-6',
  large: 'text-[20px] py-[10px] px-8',
} as const;

export type ButtonVariant = keyof typeof variantStyles;
export type ButtonSize = keyof typeof sizeStyles;
