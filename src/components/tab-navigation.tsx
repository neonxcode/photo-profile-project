"use client" // Enables client-side features like useState/useEffect in Next.js 13+ app directory

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation" // Hooks for navigation and route detection
import Link from "next/link"                             // Next.js Link for client-side routing
import { cn } from "@/lib/utils"                         // Utility to conditionally join class names
import { Playfair_Display } from "next/font/google"        

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Define the type for each tab
interface Tab {
  id: string
  label: string
  href: string
}

// Define the list of tabs
const tabs: Tab[] = [
  { id: "Street", label: "Street", href: "/street" },
  { id: "People", label: "People", href: "/people" },
  { id: "Outdoor", label: "Outdoor", href: "/outdoor" },
  { id: "Abstract", label: "Abstract", href: "/abstract" },
]

export default function TabNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)  // Track if the user has scrolled
  const pathname = usePathname()                       // Get current route
  const router = useRouter()                           // For programmatic routing (not used directly here)

  // Determine which tab is currently active based on pathname
  const getActiveTab = () => {
    const currentTab = tabs.find((tab) => tab.href === pathname)
    return currentTab?.id || "Street"
  }

  const activeTab = getActiveTab()

  // Add scroll listener to update `isScrolled` state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTabClick = (href: string) => {
    router.push(href) // Unused currently – routing is handled by <Link>
  }

  return (
    <nav
      className={cn(
        "sticky",            // Stick to top of viewport
        "top-0",             // Position at the top
        "z-50",              // High z-index to appear above most content
        "transition-all",    // Animate changes
        "duration-300",      // 300ms transition
        isScrolled
          ? "backdrop-blur-sm shadow-sm" // Apply blur and shadow when scrolled
          : "backdrop-blur-sm"           // Just blur by default
      )}
    >
      <div className="container mx-auto px-2 py-2">
        {/* Mobile Layout - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "px-4",                       // Padding x-axis
                "py-2.5",                    // Padding y-axis
                "rounded-lg",                // Slightly rounded corners
                "border",                    // Default border width (1px)
                "transition-all duration-300", // Smooth interactions
                "text-sm font-medium",       // Small but bold text
                "text-center",               // Center-align text
                "backdrop-blur-sm",          // Glass-like background blur
                "font-[var(--font-playfair-display)]",
                "hover:scale-[1.02]",        // Slight grow on hover
                "hover:shadow-sm",           // Medium shadow on hover
                "active:scale-[0.98]",       // Shrink slightly on click

                activeTab === tab.id
                  ? "bg-teal-500 border-teal-500 text-white shadow-sm" // Active tab styles
                  : "bg-white/80 border-gray-200 text-gray-700 hover:bg-white/90 hover:border-gray-300 hover:shadow-sm" // Inactive tab styles
              )}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Desktop Layout - Horizontal Row */}
        <div className="hidden md:flex justify-center gap-4">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={cn(
                "px-2",                       // Wider horizontal padding
                "py-2",                       // Taller vertical padding
                "rounded-lg",                 // Rounded corners
                "border",                     // Border around tab
                "transition-all duration-300",// Smooth animations
                "text-base font-medium",      // Normal size, bold text
                "backdrop-blur-sm",           // Glass blur effect
                "font-[var(--font-playfair-display)]",
                "hover:scale-[1.02]",         // Scale on hover
                "hover:shadow-sm",            // Shadow on hover
                "active:scale-[0.98]",        // Shrink on click

                activeTab === tab.id
                  ? "bg-teal-500 border-teal-500 text-white shadow-sm" // Active tab
                  : "bg-white/80 border-gray-200 text-gray-700 hover:bg-white/90 hover:border-gray-300 hover:shadow-sm" // Inactive tab
              )}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
