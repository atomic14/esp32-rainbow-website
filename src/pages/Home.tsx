import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroMobile from '../assets/hero/mobile.webp'
import heroTablet from '../assets/hero/tablet.webp'
import heroDesktop from '../assets/hero/desktop.webp'
import heroPlaceholder from '../assets/hero/placeholder.webp'
import youtubeThumb from '../assets/2moCumkF3EM.webp'
import youtubeThumbMobile from '../assets/2moCumkF3EM-640.webp'
import ReactPixel from 'react-facebook-pixel';
import { Helmet } from 'react-helmet-async'

function YouTubeFacade() {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = '2moCumkF3EM';

  if (showVideo) {
    return (
      <iframe
        className="w-full h-full rounded-xl shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="ESP32 Rainbow ZX Spectrum Demo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setShowVideo(true)}
      className="relative w-full h-full group"
      aria-label="Play ESP32 Rainbow ZX Spectrum Demo Video"
    >
      <img 
        src={youtubeThumb} 
        srcSet={`${youtubeThumbMobile} 640w, ${youtubeThumb} 1280w`}
        sizes="(max-width: 768px) 640px, 1280px"
        alt="YouTube video thumbnail" 
        width="1280" 
        height="720"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover rounded-xl shadow-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
          <svg
            className="w-8 h-8 text-white ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity rounded-xl" />
    </button>
  );
}

const trackPurchaseClick = () => {
  console.log("******* trackPurchaseClick ***");
  // // Set a timeout to ensure navigation happens even if tracking fails
  // const navigationTimeout = setTimeout(() => {
  //   console.log("******* navigationTimeout ***");
  //   window.open(url, '_blank', 'noopener,noreferrer');
  // }, 1000);

  try {
    // const callback = () => {
    //   console.log("******* callback ***");
    //   clearTimeout(navigationTimeout);
    //   window.open(url, '_blank', 'noopener,noreferrer');
    // };

    // Google Analytics conversion tracking
    gtag('event', 'conversion', {
      'send_to': 'AW-627599899/MGUjCMW13PcZEJvUoasC',
      'value': 20.0,
      'currency': 'USD',
      'event_callback': null
    });

    // Facebook Pixel purchase tracking
    ReactPixel.track('Purchase', {currency: "USD", value: 20.00});
  } catch (_error) {
    console.log("******* error ***");
    // window.open(url, '_blank', 'noopener,noreferrer');
  }

  return false;
};

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = window.innerWidth < 768 ? heroMobile : 
              window.innerWidth < 1280 ? heroTablet : 
              heroDesktop;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>ESP32 Rainbow - ZX Spectrum Emulator</title>
        <meta name="description" content="A ZX Spectrum emulator built using an ESP32 microcontroller. Features composite video output, PS/2 keyboard support, and SD card storage for loading games." />
        
        {/* JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ESP32 Rainbow ZX Spectrum Emulator",
            "description": "A ZX Spectrum emulator built using an ESP32 microcontroller. Features composite video output, PS/2 keyboard support, and SD card storage for loading games.",
            "brand": {
              "@type": "Brand",
              "name": "ESP32 Rainbow"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.crowdsupply.com/atomic14/esp32-rainbow",
              "availability": "https://schema.org/InStock"
            },
            "url": "https://www.esp32rainbow.com",
            "category": "Electronics",
            "isAccessoryOrSparePartFor": {
              "@type": "Product",
              "name": "ESP32 Microcontroller"
            }
          })}
        </script>
      </Helmet>
      {/* Banner Image */}
      <div className="w-full h-[300px] relative overflow-hidden">
        <img 
          src={heroPlaceholder}
          className={`w-full h-full object-cover object-center transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'} absolute inset-0`}
          alt="ZX Spectrum 48K Placeholder"
          aria-hidden="true"
        />
        <img 
          srcSet={`${heroMobile} 640w, ${heroTablet} 1280w, ${heroDesktop} 1920w`}
          sizes="100vw"
          src={heroDesktop}
          alt="ZX Spectrum 48K" 
          className={`w-full h-full object-cover object-center transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center text-white">
            <div className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-shadow-strong flex flex-col items-center">
              <span className="inline-block text-indigo-100 leading-tight">ESP32 Rainbow</span>
              <span className="inline-block text-indigo-200 leading-tight">ZX Spectrum Reborn</span>
            </div>
            <p className="mt-6 text-xl text-shadow-strong text-gray-100">
              A modern recreation of the Sinclair ZX Spectrum, bringing this classic 1982 computer back to life
              with cutting-edge technology and a beautiful touch keyboard.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-8">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
          <a
            href="https://www.crowdsupply.com/atomic14/esp32-rainbow"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackPurchaseClick();
            }}
            className="w-full sm:w-auto inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-150"
          >
            Pre-order now!
          </a>
            <Link
              to="/docs"
              className="w-full sm:w-auto inline-block px-8 py-3 text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-150"
            >
              Documentation
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full max-w-4xl mx-auto mt-16 px-4">
          <div className="aspect-video w-full">
            <YouTubeFacade />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repositories Section */}
        <div className="mt-24 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Open Source Project</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-label="GitHub Repository Icon">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3 className="text-xl font-semibold text-gray-100">ESP32 ZX Spectrum</h3>
              </div>
              <p className="text-gray-300 mb-4">
                The main software repository containing the emulator firmware, desktop tools, and utilities.
                Features the complete ZX Spectrum emulator implementation for ESP32.
              </p>
              <a
                href="https://github.com/atomic14/esp32-zxspectrum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
              >
                View Repository
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-gray-300 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-label="GitHub Repository Icon">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <h3 className="text-xl font-semibold text-gray-100">ESP32 ZX Spectrum Hardware</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Complete hardware design files including KiCad PCB designs, schematics, and 3D models.
                Everything you need to build your own ESP32 Rainbow ZX Spectrum.
              </p>
              <a
                href="https://github.com/atomic14/esp32-zxspectrum-hardware"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
              >
                View Repository
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Games Catalog Section - Moved up */}
        <div className="mt-24 max-w-7xl mx-auto px-4">
          <div className="p-8 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-lg shadow-lg border border-indigo-700">
            <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">Play Classic ZX Spectrum Games</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-200 mb-6">
                Want to just play some games now? We've got a vast database of classic ZX Spectrum 48K and 128K games, playable directly in your browser. 
                Experience the golden age of 8-bit gaming with thousands of titles from the 1980s, 
                from iconic arcade adventures to pioneering puzzle games.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/games"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-150"
                >
                  Browse Games Catalog
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="mt-6 text-gray-300 text-sm">
                <p>
                  Featuring popular titles like Manic Miner, Jet Set Willy, Elite, and thousands more. 
                  No downloads required - just click and play!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* More from atomic14 Section */}
        <div className="mt-24 max-w-7xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">More from atomic14</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">The atomic14 Blog</h3>
              <p className="text-gray-300 mb-4">
                Electronics projects, ESP32 experiments, and behind-the-scenes write-ups on how the
                ESP32 Rainbow and other atomic14 projects are built.
              </p>
              <a
                href="https://www.atomic14.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
              >
                Visit the blog
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">ESP32 Module Comparison</h3>
              <p className="text-gray-300 mb-4">
                Choosing an ESP32 for your own project? Compare Espressif modules side by side with
                datasheet-sourced specs, pinouts, schematics and interactive 3D views.
              </p>
              <a
                href="https://www.atomic14.com/esp32/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
              >
                Compare modules
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">ESP32 Boards Guide</h3>
              <p className="text-gray-300 mb-4">
                A guide to popular ESP32 development boards, organised by category with specs,
                pricing and practical use cases for makers.
              </p>
              <a
                href="https://www.atomic14.com/esp32/boards/"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
              >
                Browse boards
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* The Spectrum Section */}
        <div className="mt-24 max-w-7xl mx-auto px-4 w-full">
          <div className="p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Want the Full-Size Experience?</h2>
            <p className="text-gray-300 mb-6">
              The ESP32 Rainbow is a pocket-sized tribute to the ZX Spectrum — but if you're after a
              full-size recreation with the classic rubber keyboard, our friends (and competition!) at
              Retro Games have you covered with The Spectrum. It pairs beautifully with an ESP32 Rainbow
              on any retro desk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://link.amazon/B09avH6WH"
                target="_blank"
                rel="sponsored noopener"
                className="inline-flex items-center px-6 py-3 text-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-150"
              >
                The Spectrum on Amazon
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <Link
                to="/alternatives/the-spectrum"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-indigo-400 border-2 border-indigo-600 rounded-md hover:bg-gray-700 transition-colors duration-150"
              >
                Learn more
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              As an Amazon Associate we earn from qualifying purchases.
            </p>
          </div>
        </div>

        {/* Support Section - Now after Games Catalog */}
        <div className="mt-24 max-w-7xl mx-auto px-4">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Support My Work</h2>
            <p className="text-gray-300 mb-6">
              If you find these projects helpful, consider supporting my work on Patreon.
              You'll get early access to content and help fund new projects!
            </p>
            <a
              href="https://www.patreon.com/c/atomic14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-lg font-medium bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors duration-150"
            >
              <svg 
                className="w-6 h-6 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-label="Patreon Icon"
              >
                <path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6z"/>
              </svg>
              Support on Patreon
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

const features = [
  {
    title: "Classic Emulation",
    description: "Fully emulates both 48K and 128K ZX Spectrum models with authentic sound through built-in speaker or headphone jack."
  },
  {
    title: "Modern Display",
    description: "Vibrant 320 x 240 color TFT display with a beautiful 40-key full-color ZX Spectrum-style touch keyboard."
  },
  {
    title: "Powerful Hardware",
    description: "ESP32-S3 dual-core XTensa LX7 MCU running at 240 MHz for smooth emulation performance."
  },
  {
    title: "Modern Connectivity",
    description: "USB Type-C for power and data, microSD storage for games, and can even function as a USB keyboard."
  },
  {
    title: "Expandable Design",
    description: "Two QWIIC connectors and an expansion port providing access to GPIO, display, and SD card for your own projects."
  },
  {
    title: "Open Source",
    description: "Fully open hardware under GPL license, with complete KiCad project files and emulator firmware available on GitHub."
  }
]


