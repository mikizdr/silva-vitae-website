import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DocsGettingStartedPage from './pages/DocsGettingStartedPage';
import DocsIndexPage from './pages/DocsIndexPage';
import DocsPage2Page from './pages/DocsPage2Page';
import HomePage from './pages/HomePage';
import TileChecklistPage from './pages/TileChecklistPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/docs" element={<DocsIndexPage />} />
        <Route path="/docs/getting-started" element={<DocsGettingStartedPage />} />
        <Route path="/docs/page2" element={<DocsPage2Page />} />
        <Route path="/docs/lepljenje-plocica" element={<TileChecklistPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
