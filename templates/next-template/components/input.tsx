'use client'

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const togglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState)
    }

    const inputType = showPassword ? "text" : type

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            "border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={cn(
              "absolute right-2 top-1/2 -translate-y-1/2 focus:outline-none",
              className
            )}
          >
            {showPassword ? (
              <Icons.eye className={cn("h-5 w-5 text-gray-400", className)} />
            ) : (
              <Icons.eyeOff
                className={cn("h-5 w-5 text-gray-400", className)}
              />
            )}
          </button>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
