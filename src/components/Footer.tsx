import { Link } from 'react-router-dom'

const siteLinks = [
  { to: '/docs', label: 'Documentation' },
  { to: '/games', label: 'Games' },
  { to: '/emulator', label: 'Emulator' },
  { to: '/firmware', label: 'Firmware' },
  { to: '/faq', label: 'FAQ' },
]

const atomic14Links = [
  { href: 'https://www.atomic14.com', label: 'atomic14 Blog' },
  { href: 'https://www.atomic14.com/esp32/', label: 'ESP32 Module Comparison' },
  { href: 'https://www.atomic14.com/esp32/boards/', label: 'ESP32 Boards Guide' },
  { href: 'https://www.youtube.com/@atomic14', label: 'YouTube' },
  { href: 'https://www.patreon.com/c/atomic14', label: 'Patreon' },
]

const communityLinks = [
  { href: 'https://github.com/atomic14/esp32-zxspectrum', label: 'GitHub - Firmware' },
  { href: 'https://github.com/atomic14/esp32-zxspectrum-hardware', label: 'GitHub - Hardware' },
  { href: 'https://github.com/atomic14/esp32-zxspectrum/wiki', label: 'Wiki' },
  { href: 'https://github.com/atomic14/esp32-zxspectrum/discussions', label: 'Discussions' },
  { href: 'https://esp32zx.substack.com', label: 'Newsletter' },
]

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">ESP32 Rainbow</h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-indigo-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">More from atomic14</h3>
            <ul className="space-y-2">
              {atomic14Links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-gray-400 hover:text-indigo-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-gray-400 hover:text-indigo-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider mb-4">More Spectrum Goodness</h3>
            <p className="text-gray-400 mb-3">
              Want a full-size rubber-keyed recreation to go with your ESP32 Rainbow? Check out The Spectrum from Retro Games.
            </p>
            <Link to="/alternatives/the-spectrum" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              The Spectrum from Retro Games
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            An <a href="https://www.atomic14.com" className="text-gray-400 hover:text-indigo-300 transition-colors">atomic14</a> project
          </p>
          <Link to="/compliance" className="text-gray-500 hover:text-indigo-300 text-sm transition-colors">
            Compliance
          </Link>
        </div>
      </div>
    </footer>
  )
}
