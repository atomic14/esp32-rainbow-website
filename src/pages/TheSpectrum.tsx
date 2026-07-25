import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import consoleImage from '../assets/thespectrum/console.jpg'
import boxImage from '../assets/thespectrum/box.jpg'

const AFFILIATE_LINK = 'https://link.amazon/B09avH6WH'
const USER_MANUAL_LINK = 'https://www.amazon.co.uk/dp/1837919682?tag=atomic14-21'

function AmazonButton({ label }: { label: string }) {
  return (
    <a
      href={AFFILIATE_LINK}
      target="_blank"
      rel="sponsored noopener"
      className="inline-flex items-center px-8 py-3 text-lg font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-150"
    >
      {label}
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  )
}

export default function TheSpectrum() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Helmet>
        <title>The Spectrum by Retro Games - ESP32 Rainbow</title>
        <meta
          name="description"
          content="The Spectrum from Retro Games is a full-size recreation of the ZX Spectrum with a rubber keyboard, HDMI output and 48 built-in games. How does it compare to the ESP32 Rainbow?"
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-gray-100 mb-6">The Spectrum</h1>

      <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
        <div className="flex-1">
          <p className="text-xl text-gray-300 mb-8">
            We love the ZX Spectrum in all its forms — including the competition! The Spectrum from
            Retro Games Ltd is a full-size recreation of the classic 1982 machine, complete with the
            iconic rubber keyboard. If the ESP32 Rainbow is the Spectrum in your pocket, The Spectrum
            is the one under your TV.
          </p>
          <AmazonButton label="Get The Spectrum on Amazon" />
          <p className="text-gray-500 text-sm mt-3">
            As an Amazon Associate we earn from qualifying purchases.
          </p>
        </div>
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="sponsored noopener"
          className="md:w-2/5 flex-shrink-0"
        >
          <img
            src={boxImage}
            alt="The Spectrum box, console and introduction booklet"
            width="471"
            height="312"
            loading="eager"
            className="w-full rounded-lg shadow-lg"
          />
        </a>
      </div>

      <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 mb-10">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">What you get</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <ul className="flex-1 space-y-2 text-gray-300 list-disc list-inside">
            <li>Full-size recreation of the original ZX Spectrum with a working rubber keyboard</li>
            <li>Emulates both 48K and 128K Spectrum models</li>
            <li>HDMI output for modern TVs, USB-C powered</li>
            <li>48 licensed built-in games including Manic Miner, Head Over Heels and The Hobbit</li>
            <li>Save states (four slots per game) and a 40-second rewind feature</li>
            <li>Four USB ports for controllers and loading your own games</li>
          </ul>
          <img
            src={consoleImage}
            alt="The Spectrum console with its rubber keyboard"
            width="537"
            height="339"
            loading="lazy"
            className="md:w-2/5 rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 mb-10">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">The Spectrum vs ESP32 Rainbow</h2>
        <p className="text-gray-300 mb-4">
          Honestly? They complement each other. The Spectrum gives you the authentic full-size desk
          experience on a big screen. The ESP32 Rainbow is a hackable, open-source, pocket-sized
          machine with its own display, touch keyboard, and an expansion port for your own hardware
          projects. Many of us have both on the desk.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr className="border-b border-gray-700 text-gray-100">
                <th className="py-2 pr-4"></th>
                <th className="py-2 pr-4">The Spectrum</th>
                <th className="py-2">ESP32 Rainbow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="py-2 pr-4 text-gray-400">Size</td>
                <td className="py-2 pr-4">Full-size original</td>
                <td className="py-2">Pocket-sized</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-400">Display</td>
                <td className="py-2 pr-4">HDMI to your TV</td>
                <td className="py-2">Built-in colour TFT</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-400">Keyboard</td>
                <td className="py-2 pr-4">Rubber keys</td>
                <td className="py-2">Touch keyboard</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-400">Open source</td>
                <td className="py-2 pr-4">No</td>
                <td className="py-2">Fully — hardware and firmware</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-gray-400">Hackability</td>
                <td className="py-2 pr-4">Load your own games via USB</td>
                <td className="py-2">GPIO expansion port, QWIIC connectors, build your own firmware</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 mb-10">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">Further reading</h2>
        <p className="text-gray-300 mb-4">
          Retro Games also publish a lovely full-colour user manual for The Spectrum — a hardback
          collector's edition in the spirit of the original Sinclair manuals, written with input
          from Chris Smith, author of the definitive book on the Spectrum's ULA chip.
        </p>
        <a
          href={USER_MANUAL_LINK}
          target="_blank"
          rel="sponsored noopener"
          className="inline-flex items-center text-indigo-400 hover:text-indigo-300"
        >
          The Spectrum - User Manual on Amazon
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <AmazonButton label="The Spectrum on Amazon" />
        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 text-lg font-medium text-indigo-400 border-2 border-indigo-600 rounded-md hover:bg-gray-800 transition-colors duration-150"
        >
          Or stick with the ESP32 Rainbow
        </Link>
      </div>

      <p className="text-gray-600 text-xs mt-10">
        Product images © Retro Games Ltd.
      </p>
    </div>
  )
}
