import { Link, useLocation } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Banner from './Banner'
import DeviceStatus from './DeviceStatus'

type SubNavItem = {
  to: string
  label: string
  id: string
  external?: boolean
  icon?: JSX.Element
}

type NavItem = {
  to?: string
  label: string
  id: string
  icon: JSX.Element
  external?: boolean
  children?: SubNavItem[]
}

const navigationItems: NavItem[] = [
  {
    to: '/games',
    label: 'Play ZX Spectrum Games',
    id: 'games',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    )
  },
  {
    label: 'ESP32 Rainbow',
    id: 'esp32',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    ),
    children: [
      {
        to: '/firmware',
        label: 'Firmware',
        id: 'firmware',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        )
      },
      {
        to: '/file-browser',
        label: 'File Browser',
        id: 'file-browser',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        )
      },
      {
        to: '/docs',
        label: 'Quick Start',
        id: 'docs',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        )
      },
      {
        to: '/pinout',
        label: 'Pinout',
        id: 'pinout',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h10v10H7V7zm0 0V5m10 2V5m0 10v2m-10-2v2M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2"
          />
        )
      },
      {
        to: '/faq',
        label: 'FAQ',
        id: 'faq',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        )
      },
      {
        to: '/compliance',
        label: 'Compliance',
        id: 'compliance',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        )
      },
      {
        to: '/github',
        label: 'GitHub',
        id: 'github',
        icon: (
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        )
      },
      {
        to: 'https://github.com/atomic14/esp32-zxspectrum/wiki',
        label: 'Wiki',
        id: 'wiki',
        external: true,
        icon: (
          <path strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1} d="M14.645 2.428a8 8 0 0 0-1.61-.3a9.3 9.3 0 0 0-3.6.28l-.07.02a9.928 9.928 0 0 0 .01 19.15a9 9 0 0 0 2.36.34a1.3 1.3 0 0 0 .27.02a9.7 9.7 0 0 0 2.63-.36a9.931 9.931 0 0 0 .01-19.15m-.27.96a8.94 8.94 0 0 1 5.84 5.11h-4.26a13.8 13.8 0 0 0-2.74-5.35a8 8 0 0 1 1.16.24m-2.37-.09a12.8 12.8 0 0 1 2.91 5.2h-5.84a12.55 12.55 0 0 1 2.93-5.198Zm3.16 6.2a13.2 13.2 0 0 1 0 5.01h-6.32a12.2 12.2 0 0 1-.25-2.5a12.4 12.4 0 0 1 .25-2.51Zm-5.6-6.09l.07-.02a9 9 0 0 1 1.16-.23A13.6 13.6 0 0 0 8.045 8.5H3.8a9 9 0 0 1 5.765-5.092m-6.5 8.6a8.7 8.7 0 0 1 .37-2.51h4.39a14 14 0 0 0-.23 2.51a14 14 0 0 0 .23 2.5h-4.39a8.6 8.6 0 0 1-.37-2.5m6.57 8.61a8.9 8.9 0 0 1-5.84-5.11h4.24a13.6 13.6 0 0 0 2.77 5.35a8 8 0 0 1-1.17-.24m-.56-5.11h5.84a12.64 12.64 0 0 1-2.91 5.21a12.9 12.9 0 0 1-2.93-5.21m5.3 5.11a12 12 0 0 1-1.17.24a13.8 13.8 0 0 0 2.75-5.35h4.26a8.92 8.92 0 0 1-5.84 5.11m1.8-6.11a13.6 13.6 0 0 0 0-5.01h4.39a8.4 8.4 0 0 1 .37 2.51a8.7 8.7 0 0 1-.36 2.5Z" />        )
      },
      {
        to: 'https://github.com/atomic14/esp32-zxspectrum/discussions',
        label: 'Discussions',
        id: 'discussions',
        external: true,
        icon: (
          <g><path strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} d="M7.5 22a5.5 5.5 0 1 0-4.764-2.75l-.461 2.475l2.475-.46A5.5 5.5 0 0 0 7.5 22" /><path strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2} d="M15.282 17.898A8 8 0 0 0 18 16.93l3.6.67l-.67-3.6A8 8 0 1 0 6.083 8.849" /></g>
        )
      },
      {
        to: 'https://esp32zx.substack.com',
        label: 'Newsletter',
        id: 'newsletter',
        external: true,
        icon: (
          <path d="M20.5 4H3.5C2.67 4 2 4.67 2 5.5v13c0 .83.67 1.5 1.5 1.5h17c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5zM3.5 5.5h17v2.5h-17V5.5zm0 4h17v7.5h-17V9.5z"/>
        )
      },
    ]
  },
  {
    label: 'Tools',
    id: 'tools',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    ),
    children: [
      {
        to: '/tools/scr-to-png',
        label: 'Screenshot to PNG',
        id: 'scr-to-png',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        )
      },
      {
        to: '/tools/tap-to-wav',
        label: 'TAP/TZX to WAV',
        id: 'tap-to-wav',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        )
      },
      {
        to: '/tools/tap-to-z80',
        label: 'TAP/TZX to Z80',
        id: 'tap-to-z80',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        )
      },
      // {
      //   to: '/tools/video-to-avi',
      //   label: 'Video to AVI',
      //   id: 'video-to-avi',
      //   icon: (
      //     <path
      //       strokeLinecap="round"
      //       strokeLinejoin="round"
      //       strokeWidth={2}
      //       d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m0-4v4m0-4L9 6m6 4L9 14M9 6l-4.553-2.276A1 1 0 003 4.618v6.764a1 1 0 001.447.894L9 10m0-4v4"
      //     />
      //   )
      // },
      {
        to: '/tools/binary-to-header',
        label: 'Binary to C/C++',
        id: 'binary-to-header',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        )
      },
      {
        to: 'https://www.atomic14.com/esp32/',
        label: 'ESP32 Modules',
        id: 'esp32-modules',
        external: true,
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        )
      },
    ]
  },
  {
    to: 'https://www.atomic14.com',
    label: 'Blog',
    id: 'blog',
    external: true,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    )
  },
  {
    label: 'Alternatives',
    id: 'alternatives',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    ),
    children: [
      {
        to: '/alternatives/the-spectrum',
        label: 'The Spectrum',
        id: 'the-spectrum',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        )
      },
    ]
  }
]

interface NavItemProps extends NavItem {
  mobile?: boolean
  onClick?: () => void
}

type NavDropdownProps = {
  label: string
  icon: JSX.Element
  children: SubNavItem[]
  mobile?: boolean
  onClick?: () => void
}

function NavDropdown({ label, icon, children, mobile, onClick }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const baseClasses = "text-gray-300 bg-gray-800 hover:text-indigo-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none rounded-md flex items-center"
  const mobileClasses = mobile ? "block px-3 py-2 text-base font-medium" : "px-3 py-2"

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseClasses} ${mobileClasses} w-full ${isOpen ? 'bg-gray-800' : ''}`}
        aria-expanded={isOpen}
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
        {label}
        <svg
          className={`ml-2 h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className={`
          absolute z-10 ${mobile ? 'relative' : 'left-0 mt-2'} w-48
          rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5
        `}>
          <div className="py-1" role="menu">
            {children
              .map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-indigo-400 flex items-center"
                  onClick={() => {
                    setIsOpen(false)
                    onClick?.()
                  }}
                  role="menuitem"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.icon && (
                    <svg
                      className="w-5 h-5 mr-2"
                      fill={item.to === '/github' ? 'currentColor' : 'none'}
                      stroke={item.to === '/github' ? undefined : 'currentColor'}
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  )}
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

function NavItem(props: NavItemProps) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const showTestOptions = searchParams.get('test') === 'true'

  // Hide device-test nav item unless test=true
  if (props.id === 'device-test' && !showTestOptions) {
    return null
  }

  if (props.children && Array.isArray(props.children)) {
    return <NavDropdown {...props} children={props.children} />
  }

  if (!props.to) {
    return null
  }

  const isActive = location.pathname === props.to

  const baseClasses = "text-gray-300 hover:text-indigo-400 focus:outline-none focus:ring-none rounded-md flex items-center"
  const mobileClasses = props.mobile ? "block px-3 py-2 text-base font-medium focus:ring-offset-2 focus:ring-offset-gray-800" : "px-3 py-2"
  const activeClasses = isActive ? "text-indigo-400 bg-gray-700" : ""
  const classes = `${baseClasses} ${mobileClasses} ${activeClasses}`

  const linkProps = props.external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <Link
      to={props.to}
      className={classes}
      onClick={props.onClick}
      role="menuitem"
      aria-current={isActive ? 'page' : undefined}
      {...linkProps}
    >
      <svg
        className="w-5 h-5 mr-2"
        fill={props.to === '/github' ? 'currentColor' : 'none'}
        stroke={props.to === '/github' ? undefined : 'currentColor'}
        viewBox="0 0 24 24"
      >
        {props.icon}
      </svg>
      {props.label}
    </Link>
  )
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      <Banner />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logo section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-xl font-bold">
              <span className="text-indigo-500">ESP32</span> Rainbow
            </Link>
          </div>

          {/* Navigation items - centered in available space */}
          <div className="hidden sm:flex flex-1 justify-center sm:ml-6 sm:mr-6">
            <div className="flex space-x-4">
              {navigationItems.map((item) =>
                item.children ? (
                  <NavDropdown
                    key={item.id}
                    label={item.label}
                    icon={item.icon}
                    children={item.children}
                  />
                ) : (
                  <NavItem key={item.id} {...item} />
                )
              )}
            </div>
          </div>

          {/* DeviceStatus - always on the right */}
          <div className="flex items-center">
            <DeviceStatus />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.id}
                label={item.label}
                icon={item.icon}
                children={item.children}
                mobile
                onClick={() => setIsMobileMenuOpen(false)}
              />
            ) : (
              <NavItem
                key={item.id}
                {...item}
                mobile
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}
