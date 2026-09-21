import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "cn";

type InputWrapperProps = React.ComponentProps<typeof Input> & {
  label?: string;
  error?: string;
  description?: string;
};

function InputWrapper({
  label,
  error,
  description,
  id,
  className,
  ...props
}: InputWrapperProps) {
  const inputId = id ?? React.useId();

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}

      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      <Input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${inputId}-error`
            : description
              ? `${inputId}-description`
              : undefined
        }
        className={cn(className)}
        {...props}
      />

      {error && (
        <p id={`${inputId}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export { InputWrapper };
