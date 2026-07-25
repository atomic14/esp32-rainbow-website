import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Firmware from './pages/Firmware'
import QuickStart from './pages/QuickStart'
import GitHub from './pages/GitHub'
import Emulator from './pages/Emulator'
import Games from './pages/Games'
import GameDetail from './pages/GameDetail'
import { HelmetProvider } from 'react-helmet-async'
import { initFacebookPixel } from './utils/FacebookPixel'
import ScrToPng from './pages/ScrToPng'
import TapToWav from './pages/TapToWav'
import TapToZ80 from './pages/TapToZ80'
import VideoToAvi from './pages/VideoToAvi'
import BinaryToHeader from './pages/BinaryToHeader'
import FileBrowserPage from './pages/FileBrowser'
import Compliance from './pages/Compliance'
import Pinout from './pages/Pinout'
import TheSpectrum from './pages/TheSpectrum'

// Create a new component to handle route changes and layout
function Layout() {
  const location = useLocation();
  const isEmulatorRoute = location.pathname === '/emulator';

  useEffect(() => {
    const ReactPixel = initFacebookPixel();
    ReactPixel.pageView();
  }, [location]);

  if (isEmulatorRoute) {
    return (
      <main>
        <Routes>
          <Route path="/emulator" element={<Emulator />} />
        </Routes>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/docs" element={<QuickStart />} />
          <Route path="/firmware" element={<Firmware />} />
          <Route path="/pinout" element={<Pinout />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/letter/:letter" element={<Games />} />
          <Route path="/games/:id" element={<GameDetail />} />
          <Route path="/tools/scr-to-png" element={<ScrToPng />} />
          <Route path="/tools/tap-to-wav" element={<TapToWav />} />
          <Route path="/tools/tap-to-z80" element={<TapToZ80 />} />
          <Route path="/tools/video-to-avi" element={<VideoToAvi />} />
          <Route path="/tools/binary-to-header" element={<BinaryToHeader />} />
          <Route path="/file-browser" element={<FileBrowserPage />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/alternatives/the-spectrum" element={<TheSpectrum />} />
          <Route path="*" element={
            <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
              <h1 className="text-4xl font-bold text-gray-100">404 - Page Not Found</h1>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout />
      </Router>
    </HelmetProvider>
  )
}

export default App
