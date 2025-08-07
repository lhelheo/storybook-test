"use client";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const baseClasses =
    "font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer border";

  const variantClasses = primary
    ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700 focus:ring-blue-500"
    : "bg-transparent text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-gray-500";

  const customStyle = backgroundColor ? { backgroundColor } : {};

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses}`;

  return (
    <button
      type="button"
      className={buttonClasses}
      style={customStyle}
      {...props}
    >
      {label}
    </button>
  );
};
