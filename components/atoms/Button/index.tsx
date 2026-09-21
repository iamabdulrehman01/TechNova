import React from "react";
import { Button as UIButton } from "@/components/ui/button";

type UIButtonVariant = React.ComponentProps<typeof UIButton>["variant"] | null;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  variant?: UIButtonVariant;
  children: React.ReactNode;
  onClick?: (e: any) => void;
  className?: string;
  disabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  onMouseDown?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", variant, className, ...rest }, ref) => {
    const resolvedVariant = variant ?? undefined;

    return (
      <UIButton
        ref={ref}
        type={type}
        variant={resolvedVariant}
        className={className}
        {...rest}
      />
    );
  },
);

Button.displayName = "Button";
export default Button;
