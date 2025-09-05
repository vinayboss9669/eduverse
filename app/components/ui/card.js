import * as React from "react";

export const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className || ""}`}
      {...props}
    />
  );
});

export const CardHeader = React.forwardRef(function CardHeader({ className, ...props }, ref) {
  return <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className || ""}`} {...props} />;
});

export const CardTitle = React.forwardRef(function CardTitle({ className, ...props }, ref) {
  return (
    <h3
      ref={ref}
      className={`text-2xl font-semibold leading-none tracking-tight ${className || ""}`}
      {...props}
    />
  );
});

export const CardContent = React.forwardRef(function CardContent({ className, ...props }, ref) {
  return <div ref={ref} className={`p-6 pt-0 ${className || ""}`} {...props} />;
});