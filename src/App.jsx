// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Destinations from './pages/Destinations.jsx';
import PackageDetails from './pages/PackageDetails.jsx';

/**
 * Wanderly Main Application Component
 * Demonstrates:
 * - useState & useEffect
 * - localStorage synchronization for Theme and Favorites
 * - React Router setup (/ , /destinations , /packages/:id)
 * - Lifting state up to share favorites across components
 */
export default function App() {
  // 1. Theme state: Read from localStorage or system preference, default to 'light'
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('wanderly_theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // 2. Favorites state: Read saved package IDs from localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('wanderly_favorites');
      return savedFavorites ? JSON.parse(savedFavorites) : ['hunza-escape'];
    } catch {
      return ['hunza-escape'];
    }
  });

  // 3. Persist theme to localStorage and set data-theme attribute on root element
  useEffect(() => {
    try {
      localStorage.setItem('wanderly_theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      console.warn('Unable to persist theme to localStorage', e);
    }
  }, [theme]);

  // 4. Persist favorites array to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('wanderly_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('Unable to persist favorites to localStorage', e);
    }
  }, [favorites]);

  // Handler to toggle light/dark theme
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Handler to add or remove package from favorites
  const handleToggleFavorite = (packageId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(packageId)) {
        return prevFavorites.filter((id) => id !== packageId);
      } else {
        return [...prevFavorites, packageId];
      }
    });
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Navigation Bar */}
        <Navbar
          theme={theme}
          onToggleTheme={handleToggleTheme}
          favoritesCount={favorites.length}
        />

        {/* Main Content Area Driven by React Router */}
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            <Route
              path="/destinations"
              element={<Destinations />}
            />
            <Route
              path="/packages/:id"
              element={
                <PackageDetails
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <Home
                  favorites={favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              }
            />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
