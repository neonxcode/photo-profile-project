"use client"

import { useState } from "react"
import { X, ArrowRight, Instagram, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AboutMePanel() {
  const [isOpen, setIsOpen] = useState(false)

  const togglePanel = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Fixed About Me Button */}
      <button
        onClick={togglePanel}
        className={cn(
          "fixed bottom-6 right-6 z-40 bg-teal-500 text-white px-4 py-3 rounded shadow-lg",
          "backdrop-blur-md border border-teal-500/20 transition-all duration-300",
          "hover:bg-teal-700 hover:scale-105 hover:shadow-xl",
          "active:scale-95 flex items-center gap-2 font-medium",
          "md:px-6 md:py-3 text-sm md:text-base",
        )}
      >
        About Me
        <ArrowRight className="w-4 h-4 transition-transform duration-300" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={togglePanel}
        />
      )}

      {/* Slide Up Panel */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-lg transition-transform duration-500 ease-out",
          "max-h-[90vh] overflow-hidden",
          isOpen ? "translate-y-0" : "translate-y-full",
        )}
      >
        {/* Panel Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">About Me</h2>
          <button onClick={togglePanel} className="p-2 hover:bg-gray-100 rounded transition-colors duration-200">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Panel Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
              {/* Main Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Image Section - Left side on desktop */}
                <div className="order-2 lg:order-1">
                  <div className="relative rounded overflow-hidden shadow-2xl">
                    <img
                      src="/images/real1.webp?height=1024&width=768"
                      alt="Photographer"
                      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                  </div>
                </div>

                {/* Text Content - Right side on desktop */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-base md:text-lg">
                      Hi, I'm Shashank, a photographer based in Eindhoven, Netherlands. Originally from India, I've
                      always been fascinated by the way a single image can hold an entire story. Photography isn't just
                      a passion for me—it's a way to see and understand the world, to capture fleeting moments that
                      might otherwise be forgotten.
                    </p>

                    <p className="text-base md:text-lg">
                      I specialize in street, portrait, nature, and event photography, finding beauty in both the grand
                      and the ordinary. Whether it's a quiet glance between loved ones, the energy of a bustling city,
                      or the stillness of a landscape, I strive to capture images that feel real, emotional, and
                      timeless.
                    </p>

                    <p className="text-base md:text-lg">
                      For me, photography is about connection—between people, places, and emotions. Every shoot is a
                      collaboration, an opportunity to create something meaningful together. If you're looking for
                      someone to document your story, let's make it happen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Contact Me</h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  If you've enjoyed my photography and would like to support my work, a small gesture means the world.
                  You can do so by clicking the button below. Thank you for appreciating my art!
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-teal-500 text-white px-6 py-3 rounded font-medium hover:bg-teal-500 transition-colors duration-200">
                    Get In Touch
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors duration-200">
                    View Portfolio
                  </button>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-gray-600 hover:border-pink-500 hover:text-pink-500 transition-colors duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 text-gray-600 hover:border-teal-400 hover:text-teal-400 transition-colors duration-200"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
