import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyle = cva(["transition-colors"], {
  variants: {
    theme: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghostTheme: ["hover:bg-gray-100"],
      darkTheme: [
        "bg-secondary-dark",
        "hover:bg-secondary-dark-hover",
        "text-secondary",
      ],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "h-10",
        "w-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    theme: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<"button">;

const Button = ({ theme, size, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyle({ theme, size }), className)}
    />
  );
};

export default Button;
