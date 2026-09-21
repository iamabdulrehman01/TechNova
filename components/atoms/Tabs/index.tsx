"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "cn";

type TabItem = {
  value: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

type TabsWrapperProps = {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: "default" | "line";
  orientation?: "horizontal" | "vertical";
  className?: string;
  listClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
};

function TabsWrapper({
  items,
  defaultValue,
  value,
  onValueChange,
  variant = "default",
  orientation = "horizontal",
  className,
  listClassName,
  triggerClassName,
  contentClassName,
}: TabsWrapperProps) {
  return (
    <Tabs
      value={value}
      defaultValue={defaultValue ?? items[0]?.value}
      onValueChange={onValueChange}
      orientation={orientation}
      className={className}
    >
      <TabsList variant={variant} className={listClassName}>
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className={triggerClassName}
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {items.map((item) => (
        <TabsContent
          key={item.value}
          value={item.value}
          className={cn(contentClassName)}
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

export { TabsWrapper };
export type { TabItem, TabsWrapperProps };
