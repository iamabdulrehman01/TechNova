import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type CardWrapperProps = React.ComponentProps<typeof Card> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
};

function CardWrapper({
  title,
  description,
  action,
  content,
  footer,
  children,
  ...props
}: CardWrapperProps) {
  return (
    <Card {...props}>
      {(title || description || action) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
          {action && <CardAction>{action}</CardAction>}
        </CardHeader>
      )}

      {(content || children) && (
        <CardContent>
          {content}
          {children}
        </CardContent>
      )}

      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}

export { CardWrapper };
export type { CardWrapperProps };
